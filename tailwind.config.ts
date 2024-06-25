import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-500px)" },
          // "50%": { transform: "translate(-50px)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideout: {
          "0%": { transform: "translateX(0px)" },
          // "50%": { transform: "translate(-50px)" },
          "100%": { transform: "translateX(-500px)" },
        },
      },
      animation: {
        slidein: "slidein 0.5s ease-in-out",
        slideout: "slideout 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
