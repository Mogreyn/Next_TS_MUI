import getData from "@/features/fetchData";
import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Item } from "@/config/types";

const ItemCard = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: "black",
        marginBottom: "4rem",
      }}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgb(12, 12, 12)",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid grey",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              border: "1px solid white",
              backgroundColor: "#333",
              transform: "scale(1.05)",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.name}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "8px", // Отступ между name и price
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              {item.price}.00$
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ItemCard;
