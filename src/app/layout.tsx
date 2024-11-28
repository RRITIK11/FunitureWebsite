import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Timeless Creations",
  description: "Timeless Creations crafts bespoke furniture that combines elegance, functionality, and durability. From custom designs to furniture restoration, we bring your vision to life with precision craftsmanship and sustainable materials. Explore our curated collections and transform your spaces into timeless works of art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen flex flex-col`}
      >
        <Navbar />
        <div className="h-screen relative">
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
