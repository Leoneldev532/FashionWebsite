import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "custom-white" : "#FAF6F3",
        "custom-marron":"#5D4043",
        "custom-blue":"#EFF2FD",
        "custom-marron-darklight":"#EBE0D8",
        "custom-marron-dark":"#30171B",
        "custom-light-marron":"#816A6C",
      }
    },
  },
  plugins: [],
};
export default config;
