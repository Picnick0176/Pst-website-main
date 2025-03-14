import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navber from "@/components/Navber";
import "./globals.css";
import Footer from "@/components/Footer";
import Contactpage from "@/components/Contactpage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "บริการ PST HOME SERVICES CO., LTD.",
  description: "ห่วงใยบ้านท่านเสมือนบ้านของเรา PST HOME SERVICES CO., LTD. ยินดีให้บริการ",
  icons: {
    icon: "/logo.svg", // ไอคอนทั่วไป
    apple: "/logo.png", // iOS ต้องใช้ PNG
  },
  openGraph: {
    title: "PST HOME SERVICES - ดูแลบ้านคุณเสมือนบ้านของเรา",
    description:
      "บริการทำความสะอาด ดูแลบ้าน ซ่อมแซม และปรับปรุงบ้านแบบครบวงจร",
    url: "http://www.psthomeservice.com",
    type: "website",
    images: [
      {
        url: "Poster.png", // ต้องใช้ URL จริง
        width: 1200,
        height: 630,
        alt: "PST HOME SERVICES Banner",
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
    <html lang="th">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        {children}
        <Contactpage />
        <Footer />
      </body>
    </html>
  );
}
