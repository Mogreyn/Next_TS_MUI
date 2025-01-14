import { ShoppingBasket } from "@mui/icons-material";
import { Button } from "@mui/material";

const CartButton = () => {
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
      <ShoppingBasket />
    </Button>
  );
};
export default CartButton;
