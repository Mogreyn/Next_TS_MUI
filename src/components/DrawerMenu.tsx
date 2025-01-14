import React, { Fragment } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import Link  from "next/link";
import { menuItems } from "@/app/config/menuItems";

interface DrawerMenuProps {
  openDrawer: boolean;
  toggleDrawer: (open: boolean) => void;
}

const DrawerMenuComponent: React.FC<DrawerMenuProps> = ({ openDrawer, toggleDrawer }) => {
  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{
          backgroundColor: "black",
          color: "white",
          width: "50px",
          ".MuiPaper-root": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <List
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          {menuItems.map((item) => (
            <ListItem key={item[0]} onClick={() => toggleDrawer(false)}>
              <ListItemButton component={Link} href={item[1]} passHref>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default DrawerMenuComponent;
