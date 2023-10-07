import { getProfile, getWebsite } from "@/utils/app-request";
import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const website = await getWebsite();
  const profile = await getProfile();

  return {
    name: website.title,
    short_name: website.title,
    description: profile.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#111A2C",
    theme_color: "#16A249",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
