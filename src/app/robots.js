const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://orvik-life-sciences.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

