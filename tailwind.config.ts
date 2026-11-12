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
        orvik: {
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#3b82f6",
            500: "#0066eb",
            600: "#0052cc", // Official Logo Royal Blue
            700: "#0043a8",
            800: "#003482",
            900: "#0a2559",
            950: "#071638",
          },
          gold: {
            50: "#fffdf0",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#f59e0b", // Official Logo Golden Yellow
            600: "#d97706",
            700: "#b45309",
          },
        },
      },
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "Roboto", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        poppins: ["Poppins", "Segoe UI", "Roboto", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "pharma": "0 4px 20px -2px rgba(0, 82, 204, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        "pharma-hover": "0 20px 30px -5px rgba(0, 82, 204, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
        "gold-glow": "0 4px 20px -2px rgba(245, 158, 11, 0.25)",
        "card-subtle": "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
