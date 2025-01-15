"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/config/types";

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
}

// Create a context with default values
const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
});

interface Props {
  children: React.ReactNode;
}

// Функция для сохранения корзины в localStorage
const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

// Функция для загрузки корзины из localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  }
  return [];
};

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Загружаем данные корзины только на клиенте
  useEffect(() => {
    const savedCartItems = loadCartFromLocalStorage();
    setCartItems(savedCartItems);
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId: number, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  if (CartContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return useContext(CartContext);
};
