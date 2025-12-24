import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "favicon3_ME.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "favicon3_ME.svg",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "favicon3_ME.svg",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "favicon3_ME.svg",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "screenshot-site.png",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      // {
      //   src: "screenshot-site.png",
      //   type: "image/webp",
      //   sizes: "440x956",
      //   form_factor: "narrow",
      // },
      {
        src: "screenshot-site.png",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      // {
      //   src: "screenshot-site.png",
      //   type: "image/webp",
      //   sizes: "1920x1080",
      //   form_factor: "wide",
      // },
    ],
  };
}
