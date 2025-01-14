"use client";
import { useState } from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartButton from "./CartButton";
import MenuItemsComponent from "./MenuItems";
import DrawerMenuComponent from "./DrawerMenu";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-between",
        width: "100%",
        top: 0,
        zIndex: 1100,
      }}
    >
      <DrawerMenuComponent
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
      />

      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" }, background: "black" }}>
          <MenuItemsComponent />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" }, background: "black" }}>
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Toolbar>
        <Box
          sx={{
            color: "grey",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "rgba(255, 255, 55, 0.1)",

            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              color: "white",
            },
          }}
        >
          <CartButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
