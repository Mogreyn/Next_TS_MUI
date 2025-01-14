import React, { Fragment } from "react";
import { Box, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Fragment>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          width: "100%",
          height: "40px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
        }}
      >
        <Box>
          <IconButton
            sx={{ color: "white", margin: "0 10px" }}
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{ color: "white", margin: "0 10px" }}
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ color: "white", margin: "0 10px" }}
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{ color: "white", margin: "0 10px" }}
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            sx={{ color: "white", margin: "0 10px" }}
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Footer;
