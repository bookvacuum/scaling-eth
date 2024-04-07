import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FlareCursor from "./cursor"; // Don't forget to update this path to your own component file.

// const redaction = localFont({
//   src: "./Redaction-Regular.otf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          {children}
          <FlareCursor />
        </body>
      </html>
    </>
  );
}
