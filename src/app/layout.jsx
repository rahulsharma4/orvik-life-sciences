import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingHelp from "@/components/FloatingHelp";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://orvik-life-sciences.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ORVIK Animal Health | Orvik Life Sciences Pvt. Ltd. | Hyderabad",
    template: "%s | ORVIK Animal Health",
  },
  description:
    "Official website of ORVIK LIFE SCIENCES PVT. LTD., Shop No. 111, Ram Raj Nagar, Suchitra X Road, Hyderabad-500067 (Telangana). Manufacturers of precision veterinary medicines, metho-chelated calcium supplements (Chelated Orvical Gold), uterine tonics (Utro-Heal), reproductive fertility solutions (TFS), and herbal liver stimulants.",
  applicationName: "ORVIK Animal Health",
  authors: [{ name: "Orvik Life Sciences Pvt. Ltd.", url: BASE_URL }],
  generator: "Next.js",
  keywords: [
    "Orvik Animal Health",
    "Orvik Life Sciences Pvt Ltd",
    "Veterinary medicine manufacturer Hyderabad",
    "Shop 111 Ram Raj Nagar Suchitra X Road Hyderabad",
    "Shrikant Sharma Orvik 7374934911",
    "Chelated Orvical Gold",
    "TFS Fertility Solution Powder",
    "Utro-Heal Uterine Cleanser Tonic",
    "Orvi-Guard Liver Tonic",
    "Udder Ayu Mastitis Spray",
    "Advance Orvical Gel Milk Fever",
    "Orvi-Worm Suspension",
    "Orvi-Min Forte Mineral Mixture",
    "Bovine Reproduction Protocol",
    "Three Pillars of Dairy Farming",
    "Veterinary PCD Franchise Telangana",
    "Cattle nutrition supplement India",
    "Metho-chelated minerals livestock",
    "Dairy farm fertility management"
  ],
  creator: "Orvik Life Sciences Pvt. Ltd.",
  publisher: "Orvik Life Sciences Pvt. Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
  openGraph: {
    title: "ORVIK Animal Health | Orvik Life Sciences Pvt. Ltd. | Hyderabad",
    description:
      "Precision veterinary medicines & herd nutrition. WHO-GMP & ISO 9001:2015 certified formulations for bovine fertility, calcium balance, and peak milk yield. Suchitra X Road, Hyderabad.",
    url: BASE_URL,
    siteName: "ORVIK Animal Health",
    images: [
      {
        url: "/images/Logo.png",
        width: 800,
        height: 600,
        alt: "ORVIK Animal Health - Orvik Life Sciences Pvt. Ltd. Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORVIK Animal Health | Veterinary Medicine & Dairy Nutrition",
    description:
      "Official products & clinical protocols from Orvik Life Sciences Pvt. Ltd., Suchitra X Road, Hyderabad. Manager: Shrikant Sharma (+91 7374934911).",
    images: ["/images/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "MedicalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "ORVIK LIFE SCIENCES PVT. LTD.",
      alternateName: ["Orvik Animal Health", "Orvik Veterinary"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/Logo.png`,
        width: 600,
        height: 400,
        caption: "ORVIK Animal Health Logo",
      },
      image: `${BASE_URL}/images/Logo.png`,
      description:
        "ORVIK LIFE SCIENCES PVT. LTD. is an Indian veterinary pharmaceutical company specializing in precision bovine nutrition, reproductive fertility supplements, metho-chelated minerals, and post-calving uterine tonics.",
      telephone: "+91-7374934911",
      email: "info@orviklifesciences.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No. 111, Ram Raj Nagar, Suchitra X Road",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500067",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.4988",
        longitude: "78.4746",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7374934911",
          contactType: "Customer Support & Dealership",
          contactOption: "TollFree",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Shrikant Sharma",
          jobTitle: "Manager",
          telephone: "+91-7374934911",
        },
      ],
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "ORVIK Animal Health",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/products?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
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
