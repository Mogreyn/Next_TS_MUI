import Link from "next/link";
import React,{Fragment} from "react";
import { Button } from "@mui/material";
import { menuItems } from "@/config/menuItems";

const MenuItemsComponent = () => {
  return (
    <Fragment>
    {menuItems.map((item) => (
      <Link key={item[0]} href={item[1]} passHref>
        <Button
          sx={{
            color: "grey",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textTransform: "none",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              color: "white",
            },
          }}
        >
          {item[0]}
        </Button>
      </Link>
    ))}
  </Fragment>
  )
};
export default MenuItemsComponent;
