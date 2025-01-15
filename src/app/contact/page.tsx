"use client";

import React, { useState } from "react";
import { styled, TextField, Button, Typography } from "@mui/material";

const ContactContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "black",
  overflow: "hidden",
  marginBottom:"4rem",
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  color: "white",
  fontWeight: "bold",
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
}));

const Form = styled("form")(() => ({
  width: "100%",
  maxWidth: "400px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiInputLabel-root": {
    color: "grey",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "grey",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const AddressBox = styled("div")(() => ({
  marginTop: "2rem",
  textAlign: "center",
  color: "white",
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
  };

  return (
    <ContactContainer>
      <title>Contact us</title>
      <ContactTitle variant="h4">Contact Us</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton variant="contained" fullWidth type="submit">
          Send Message
        </SubmitButton>
      </Form>
      <AddressBox>
        <Typography variant="body1">
          1234 Next Shop Street, Suite 567
          <br />
          New York, NY 10001
          <br />
          Email: contact@nextshop.com
          <br />
          Phone: (123) 456-7890
        </Typography>
      </AddressBox>
    </ContactContainer>
  );
};

export default Contact;
