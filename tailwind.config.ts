import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff",
        canvas: "#f8f9fe",
        ink: "#20201d",
        muted: "#666a60",
        line: "#e4e4de",
        accent: "#4f6a55"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 12px 32px rgba(32, 32, 29, 0.05)"
      },
      animation: {
        caret: "caret 1s step-end infinite"
      }
    }
  },
  plugins: []
};

export default config;
