import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navber from "@/components/Navber";
import "./globals.css";
import Footer from "@/components/Footer";
import Contactpage from "@/components/Contactpage";
import Admin from "@/components/Admin";
import Script from 'next/script';
import 'aos/dist/aos.css';
import AOS from 'aos';
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
        <meta name="google-site-verification" content="KS4wHg1wU8ZHk0cW5jGW3OqG3b33d-Km82xqEL_Y-bU" />
        <meta content="ปลวก,กำจัดปลวก,วิธีกําจัดปลวกถาวร,ฉีดปลวก,กําจัดปลวกใกล้ฉัน,พีเอสที,กำจัดปลวกสายไหม,กำจัดปลวกรามอินทราม,ยาฆ่าปลวก" property="og:keywords" />
        <meta content="ปลวก,กำจัดปลวก,วิธีกําจัดปลวกถาวร,ฉีดปลวก,กําจัดปลวกใกล้ฉัน,พีเอสที,กำจัดปลวกสายไหม,กำจัดปลวกรามอินทราม,ยาฆ่าปลวก" name="keywords" />
        <meta name="keywords" content="กำจัดปลวก, วิธีกําจัดปลวกถาวร, ฉีดปลวก, กําจัดปลวกใกล้ฉัน, กำจัดปลวกสายไหม, กำจัดปลวกรามอินทรา, ยาฆ่าปลวก, บริการกำจัดปลวก"/>
             {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CFLMWF5W7C"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFLMWF5W7C', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
        <Admin />
        <Navber />
        {children}
        <Contactpage />
        <Footer />
      </body>
    </html>
  );
}
