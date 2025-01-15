"use client";

import { ShoppingBasket } from "@mui/icons-material";
import { Button, Badge } from "@mui/material";
import { useCart } from "@/context/CartContext";

const CartButton = () => {
  const { cartCount } = useCart(); // Получаем количество товаров в корзине

  return (
    <Button
      href="/cart"
      sx={{
        color: "grey",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textTransform: "none",
        backgroundColor: "rgba(255, 255, 55, 0.1)",
        minWidth: 0,
        ":hover": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
        },
      }}
      aria-label="Cart"
    >
      <Badge
        badgeContent={cartCount} // Отображаем количество товаров в корзине
        color="primary"
        overlap="circular"
      >
        <ShoppingBasket />
      </Badge>
    </Button>
  );
};

export default CartButton;
