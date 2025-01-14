import type { Metadata } from "next";
import React, { ReactNode } from "react";
import  Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "Next Shop",
  description: "Next Shop",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body style={{
        marginTop: "4rem",
        backgroundColor: "black", 
      }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
