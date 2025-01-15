"use client";

import getData from "@/features/fetchData";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Product } from "@/config/types";
import { useCart } from "@/context/CartContext";

// Стилей для Card
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(12, 12, 12);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid white;
    background-color: #333;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  }
`;

// Стилей для кнопки
const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: #ff6347;
  &:hover {
    background-color: #e55347;
  }
`;

// Стилей для контейнера
const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: black;
  margin-bottom: 4rem;
`;

// Стилей для контента карточки
const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 10px;
`;

const ItemCard = () => {
  const [data, setData] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <GridContainer>
      <title>Store</title>
      {data.map((item) => (
        <StyledCard key={item.id}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.name}
          />
          <CardContentWrapper>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "white",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
              }}
            >
              {item.price}.00$
            </Typography>

            <StyledButton variant="contained" onClick={() => addToCart(item)}>
              Add to Cart
            </StyledButton>
          </CardContentWrapper>
        </StyledCard>
      ))}
    </GridContainer>
  );
};

export default ItemCard;
