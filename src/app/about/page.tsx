"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        About Next Shop
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            At Next Shop, we are committed to providing the best online shopping
            experience. From a curated selection of products to excellent
            customer service, we are here to bring you the best.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            Our mission is to make shopping easy, accessible, and enjoyable for
            everyone. We aim to deliver high-quality products at competitive
            prices.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            We envision a future where everyone can shop effortlessly, with
            access to the latest trends and technologies to make the experience
            seamless and delightful.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
