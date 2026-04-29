import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.seriouseats.com" },
      { protocol: "https", hostname: "**.southernliving.com" },
      { protocol: "https", hostname: "**.africanbites.com" },
      { protocol: "https", hostname: "**.insanelygoodrecipes.com" },
      { protocol: "https", hostname: "**.recipetineats.com" },
      { protocol: "https", hostname: "**.tasteofhome.com" },
      { protocol: "https", hostname: "**.sisijemimah.com" },
      { protocol: "https", hostname: "**.lafriquemarket.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
