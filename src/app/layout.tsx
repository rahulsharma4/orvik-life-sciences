import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingHelp from "@/components/FloatingHelp";

export const metadata: Metadata = {
  title: "ORVIK Animal Health | Orvik Life Sciences Pvt. Ltd. | Hyderabad",
  description:
    "Official website of ORVIK LIFE SCIENCES PVT. LTD., Shop No. 111, Ram Raj Nagar, Suchitra X Road, Hyderabad-500067. Manufacturers of precision veterinary medicines, chelated calcium supplements, uterine tonics, and animal nutrition.",
  icons: {
    icon: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
  keywords: [
    "Orvik Animal Health",
    "Orvik Life Sciences",
    "Suchitra X Road Hyderabad",
    "Chelated Orvical Gold",
    "TFS Fertility Powder",
    "Utro Heal Liquid",
    "Orvi Guard Liver Tonic",
    "Udder Ayu",
    "Advance Orvical Gel",
    "Veterinary medicine Hyderabad",
    "Three Pillars of Dairy Farming",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#0052cc] selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingHelp />
        <Footer />
      </body>
    </html>
  );
}
