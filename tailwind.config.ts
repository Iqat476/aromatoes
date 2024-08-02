import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF9C3E",
        secondary: "#937CE8",
        light: "#EAF0FA",
        dark: "#323339",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      width: {
        "15": "3.75rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
