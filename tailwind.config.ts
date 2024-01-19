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
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#e2e8f0",
        highlight: "#edf2f7",
        muted: "#718096",
        success: "#48bb78",
        warning: "#f6ad55",
        danger: "#e53e3e",
        info: "#63b3ed",
      },
      }
    },
  },
  plugins: [],
};
export default config;
