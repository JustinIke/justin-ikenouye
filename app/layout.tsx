import type { Metadata } from "next";
import { Cutive_Mono } from "next/font/google";
import "./globals.css";

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Justin Ikenouye",
  description: "Justin Ikenouye's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cutiveMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
