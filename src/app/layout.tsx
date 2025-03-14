import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navber from "../components/Navber";
import "./globals.css";
import Footer from "../components/Footer";
import Contactpage from "../components/Contactpage";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons : "/logo.svg",
  title: "บริการ PST HOME SERVICES CO., LTD.",
  description: "ห่วงใยบ้านท่านเสมือนบ้านของเรา PST HOME SERVICES CO., LTD. ยินดีให้บริการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber/>
        {children}
        <Contactpage />
        <Footer />
      </body>
    </html>
  );
}
