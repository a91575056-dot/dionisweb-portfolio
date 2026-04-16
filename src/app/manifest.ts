import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dionis Web",
    short_name: "Dionis Web",
    description:
      "Premium freelance web designer portfolio for landing pages and business websites.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ed",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
