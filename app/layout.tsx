import type { Metadata } from "next";
import { Bricolage_Grotesque, Lexend } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radify Solutions",
  description:
    "From supply to execution, we bring efficiency, innovation, and brilliance to every project. Whether it's residential, commercial, or industrial, we light up your world with excellence.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${lexend.variable} lexend antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
