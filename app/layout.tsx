import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AL HADI EXPORTS - Premium Garment Manufacturing & Export",
  description: "Leading garment manufacturing and export company specializing in high-quality textile production and global distribution. Professional, reliable, and trusted worldwide.",
  keywords: "garment manufacturing, textile export, clothing production, fashion manufacturing, global export, AL HADI EXPORTS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
