import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CartProvider from "./cartProvider";
import { store } from "./p2p/store";
import FlareCursor from "./cursor"; // Don't forget to update this path to your own component file.

// const redaction = localFont({
//   src: "./Redaction-Regular.otf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "ClosedAI",
  description: "Decentralized AI Training Data Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartProvider>
        <html lang="en">
          <body>
            {children}

            <FlareCursor />
          </body>
        </html>
      </CartProvider>
    </>
  );
}
