import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          DEFAULT: "var(--primary-600)",
        },
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        wa: {
          DEFAULT: "var(--wa)",
          hover: "var(--wa-hover)",
        },
        surface: "var(--surface)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "purple-soft": "0 10px 30px -12px rgba(107, 70, 240, 0.25)",
        "purple-card": "0 4px 20px -4px rgba(107, 70, 240, 0.12)",
      },
      borderRadius: {
        card: "1.25rem",
        button: "9999px",
        input: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;

