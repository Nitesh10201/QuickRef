// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://Nitesh10201.github.io",
  base: "/QuickRef",
  integrations: [
    starlight({
      title: "QuickRef",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Nitesh10201/QuickRef",
        },
      ],
    }),
  ],
});
