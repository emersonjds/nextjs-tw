import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      

      screens:{
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },

      

      colors: {
        vuejs: "#41B883",
        primary: {
          100: "#F0F4FF",
          200: "#D9E2FF",
          300: "#A6BCFF",
          400: "#598BFF",
          500: "#3366FF",
          600: "#274BDB",
          700: "#1A34B8",
          800: "#102694",
          900: "#091C7A",
        },
      }
    },
  },
  plugins: [],
};
export default config;
