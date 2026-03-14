import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#05070f",
        panel: "#0c1226",
        accent: "#6ee7ff",
        accent2: "#9f7aea"
      },
      boxShadow: {
        glow: "0 0 50px rgba(110, 231, 255, 0.25)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(115,120,255,0.18), transparent 46%), radial-gradient(circle at 20% 20%, rgba(110,231,255,0.22), transparent 34%), linear-gradient(180deg, #05070f 0%, #03040a 100%)"
      }
    }
  },
  plugins: []
};

export default config;
