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
        "OnBackgroundGray" : "#A5A5A5",
        "background" : "#FFFFFF",
        "SubColor4" : "#99CEFF"
      }
    },
  },
  plugins: [],
};
export default config;
