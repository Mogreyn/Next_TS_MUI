"use client";

import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        style={{
          marginTop: "4rem",
          backgroundColor: "black",
        }}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
