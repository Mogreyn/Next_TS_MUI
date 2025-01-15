
  export type Product = {
    image: string;
    name: string;
    price: number;
    id: number;
    quantity: number;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };