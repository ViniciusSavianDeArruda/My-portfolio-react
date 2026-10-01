import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
