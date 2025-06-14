import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Vantage Dashboard",
  description: "Finance dashboard powered by Alpha Vantage APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${montserrat.variable} 
          antialiased 
          bg-background text-forground font-body`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
