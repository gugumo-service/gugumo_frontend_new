import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#4FAAFF",
        "OnPrimary" : "#FFFFFF",
        "OnBackground" : "#000000",
        "OnBackgroundGray" : "#A5A5A5",
        "background" : "#FFFFFF",
        "SubColor4" : "#99CEFF",
        "OnSurface" : "#878787",
        "Surface" : "#EEF4FC",
        "Outline" : "#D9D9D9",
      }
    },
  },
  plugins: [],
};
export default config;
