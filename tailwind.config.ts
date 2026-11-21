import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F3E6C9",
        paper: "#EAD8B1",
        teal: { DEFAULT: "#72A9B4", deep: "#2F6873" },
        terra: { DEFAULT: "#D2643E", deep: "#A8401C" },
        mustard: "#F2B53A",
        jade: { DEFAULT: "#8FB394", deep: "#4E7A5A" },
        slate: "#4D6886",
        plum: "#5D3A68",
        rose: "#E59A98",
        ink: "#2A1F17",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        poster: ["var(--font-poster)", "sans-serif"],
        body: ["var(--font-body)", ...fontFamily.serif],
        chalk: ["Only Chalk", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
