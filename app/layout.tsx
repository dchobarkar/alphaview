import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

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
  title: "AlphaView - Alpha Vantage Data Viewer",
  description: "A modern web application for viewing Alpha Vantage API data",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default RootLayout;
