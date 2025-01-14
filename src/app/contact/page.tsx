"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "1rem", color: "white", fontWeight: "bold" }}
      >
        Contact Us
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          slotProps={{ inputLabel: { style: { color: "grey" } } }}
          InputProps={{
            style: { color: "white", borderColor: "grey" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
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
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{ inputLabel: { style: { color: "grey" } } }}
          InputProps={{
            style: { color: "white", borderColor: "grey" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
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
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          slotProps={{ inputLabel: { style: { color: "grey" } } }}
          InputProps={{
            style: { color: "white", borderColor: "grey" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
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
          }}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            marginTop: "1rem",
            backgroundColor: "grey",
            color: "white",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Send Message
        </Button>
      </form>

      <Box
        sx={{
          marginTop: "2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="body1">
          1234 Next Shop Street, Suite 567
          <br />
          New York, NY 10001
          <br />
          Email: contact@nextshop.com
          <br />
          Phone: (123) 456-7890
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
