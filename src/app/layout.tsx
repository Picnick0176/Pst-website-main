import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navber from "@/components/Navber";
import "./globals.css";
import Footer from "@/components/Footer";
import Contactpage from "@/components/Contactpage";
import Admin from "@/components/Admin";

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

  openGraph: {
    title: "PST HOME SERVICES - ดูแลบ้านคุณเสมือนบ้านของเรา",
    description:
      "บริการกำจัดปลวก แมลง หนู ยุ่ง และบริการดูแลสวน บริการทำความสะอาดในหน่อยงานต่างๆ",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Admin/>
        <Navber />
        {children}
        <Contactpage />
        <Footer />
      </body>
    </html>
  );
}
