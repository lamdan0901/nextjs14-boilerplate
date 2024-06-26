import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#B4916C",
        900: "#B4916C",
        800: "#D9A767",
        700: "#DBBCB4",
        600: "#A35427",
        400: "#FF9B1E",
        350: "#FAB55A",
        300: "#FFC961",
        200: "#F3C796",
      },
      dark: {
        DEFAULT: "#242424",
        900: "#242424",
        850: "#222222",
        700: "#383838",
        600: "#444444",
        500: "#626262",
        400: "#B9B9B9",
        300: "#D3CDC7",
      },
      white: {
        DEFAULT: "#FFFFFF",
        900: "#F5F5F5",
        800: "#F9F9F9",
        700: "#D9D9D9",
      },
      yellow: {
        DEFAULT: "#F9A825",
        900: "#F5CF05",
      },
      red: {
        DEFAULT: "#FC2B2B",
        900: "#FC2B2B",
        800: "#E01020",
        700: "#CF5763",
        500: "#EB5757",
        300: "#FA6338",
      },
      blue: {
        800: "#0089ED",
        500: "#33496C",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
