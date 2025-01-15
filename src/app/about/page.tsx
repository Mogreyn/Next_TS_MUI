"use client";

import React from "react";
import { Typography, Grid, styled } from "@mui/material";

const AboutContainer = styled("div")({
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "2rem",
  fontWeight: "bold",
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
}));

const AboutGrid = styled(Grid)({
  maxWidth: "1200px",
  justifyContent: "center",
});

const AboutGridItem = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
});

const SectionText = styled(Typography)({
  color: "gray",
  fontSize: "1rem",
  lineHeight: "1.6",
});

const About = () => {
  return (
    <AboutContainer>
      <title>About</title>
      <AboutTitle variant="h3">About Next Shop</AboutTitle>
      <AboutGrid container spacing={4}>
        <AboutGridItem item xs={12} sm={6}>
          <SectionTitle variant="h5">Who We Are</SectionTitle>
          <SectionText variant="body1">
            At Next Shop, we are committed to providing the best online shopping
            experience. From a curated selection of products to excellent
            customer service, we are here to bring you the best.
          </SectionText>
        </AboutGridItem>
        <AboutGridItem item xs={12} sm={6}>
          <SectionTitle variant="h5">Our Mission</SectionTitle>
          <SectionText variant="body1">
            Our mission is to make shopping easy, accessible, and enjoyable for
            everyone. We aim to deliver high-quality products at competitive
            prices.
          </SectionText>
        </AboutGridItem>
        <AboutGridItem item xs={12} sm={6}>
          <SectionTitle variant="h5">Our Vision</SectionTitle>
          <SectionText variant="body1">
            We envision a future where everyone can shop effortlessly, with
            access to the latest trends and technologies to make the experience
            seamless and delightful.
          </SectionText>
        </AboutGridItem>
      </AboutGrid>
    </AboutContainer>
  );
};

export default About;
