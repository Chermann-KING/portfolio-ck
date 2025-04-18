import type { Config } from "tailwindcss";
import { colors } from "./src/theme/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        background: colors.background,
        text: colors.text,
      },
      backgroundColor: {
        "background-card": {
          DEFAULT: colors.background.card.DEFAULT,
          dark: colors.background.card.dark,
        },
      },
      textColor: {
        "text-primary": {
          DEFAULT: colors.text.primary.DEFAULT,
          dark: colors.text.primary.dark,
        },
        "text-secondary": {
          DEFAULT: colors.text.secondary.DEFAULT,
          dark: colors.text.secondary.dark,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
