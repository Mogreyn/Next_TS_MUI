"use client";

import {
  Button,
  Box,
  Typography,
  CardMedia,
  styled,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/config/types";
import { useState, useEffect } from "react";

const CartContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "black",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "20px",
  fontWeight: "bold",
  fontSize: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const EmptyCartMessage = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const CartItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "15px",
  padding: "10px",
  backgroundColor: "#333",
  borderRadius: "8px",
  border: "1px solid grey",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ProductInfo = styled(Grid)(({ theme }) => ({
  "& img": {
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },
  "& h6": {
    fontSize: "1.2rem",
    marginBottom: "5px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& span": {
    fontSize: "1rem",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}));

const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& button": {
    backgroundColor: "#555",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#777",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      fontSize: "0.8rem",
      marginRight: "5px",
    },
  },
  "& .remove": {
    backgroundColor: "#e57373",
    "&:hover": {
      backgroundColor: "#ff8a80",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

const TotalContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  textAlign: "center",
  "& h5": {
    fontWeight: "bold",
    fontSize: "1.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default function CartPage() {
  const { cartItems, removeFromCart, updateCartItemQuantity, cartTotal } =
    useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a timeout
    const fetchData = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(fetchData);
  }, []);

  const handleIncrease = (productId: number) => {
    updateCartItemQuantity(productId, getItemQuantity(productId) + 1);
  };

  const handleDecrease = (productId: number) => {
    const quantity = getItemQuantity(productId);
    if (quantity > 1) {
      updateCartItemQuantity(productId, quantity - 1);
    }
  };

  const getItemQuantity = (productId: number): number => {
    const item = cartItems.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  if (loading) {
    return (
      <CartContainer>
        <title>Cart</title>
        <CircularProgress
          sx={{ color: "white", display: "block", margin: "auto" }}
        />
        <Typography variant="h6" textAlign="center" mt={2}>
          Cart loading...
        </Typography>
      </CartContainer>
    );
  }

  return (
    <CartContainer >
      <Title variant="h4">Your Cart</Title>
      {cartItems.length === 0 ? (
        <EmptyCartMessage variant="h6">Your cart is empty.</EmptyCartMessage>
      ) : (
        <>
          {cartItems.map((item: CartItem) => (
            <CartItemContainer key={item.product.id}>
              <ProductInfo container spacing={2}>
                <Grid item xs={3}>
                  <CardMedia
                    component="img"
                    image={item.product.image}
                    alt={item.product.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">{item.product.name}</Typography>
                  <Typography variant="body2">
                    {item.product.price}.00 USD
                  </Typography>
                </Grid>
              </ProductInfo>
              <Actions>
                <Button onClick={() => handleDecrease(item.product.id)}>
                  -
                </Button>
                <Typography sx={{ marginRight: "10px", fontWeight: "bold" }}>
                  {getItemQuantity(item.product.id)}
                </Typography>
                <Button onClick={() => handleIncrease(item.product.id)}>
                  +
                </Button>
                <Button
                  className="remove"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove
                </Button>
              </Actions>
            </CartItemContainer>
          ))}
          <TotalContainer>
            <Typography variant="h5">Total: {cartTotal}.00 USD</Typography>
          </TotalContainer>
        </>
      )}
    </CartContainer>
  );
}
