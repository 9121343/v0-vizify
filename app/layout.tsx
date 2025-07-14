import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRIZBLEY - Cosmic Footwear Innovation",
  description:
    "Step into the future with FRIZBLEY. Where cosmic design meets cutting-edge comfort. Discover footwear that defines tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
