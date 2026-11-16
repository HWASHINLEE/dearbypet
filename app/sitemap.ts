import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://dearbypet.com/" },
    { url: "https://dearbypet.com/about" },
    { url: "https://dearbypet.com/service" },
    { url: "https://dearbypet.com/expert" },
  ];
}
