import type { Metadata } from "next";
import { Alfa_Slab_One, Lobster, Roboto_Slab, Bungee } from "next/font/google";
import "./globals.css";

const display = Alfa_Slab_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin", "vietnamese"],
});

const script = Lobster({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin", "vietnamese"],
});

const poster = Bungee({
  variable: "--font-poster",
  weight: "400",
  subsets: ["latin", "vietnamese"],
});

const body = Roboto_Slab({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Minh Tam Pham — Solutions Architect for Civic Tech",
  description:
    "Minh Tam Pham builds clean, resilient civic-tech systems that make public services accessible, break down communication barriers and help students learn by doing — AI platforms, data pipelines and open-source hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${script.variable} ${poster.variable} ${body.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
