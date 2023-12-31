/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        solid: "10px 10px 0px var(--tw-shadow-color)",
      },
      colors: {
        "brand-red": {
          base: "#d40d0a",
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c4",
          300: "#ff9c9b",
          400: "#ff6361",
          500: "#ff3330",
          600: "#f11411",
          700: "#d40d0a", // brand-red
          800: "#a80e0c",
          900: "#8a1412",
          950: "#4c0403",
        },
        "brand-black": "#0d0d0a",
        "brand-blue": "#101827",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand-black"),
            a: {
              // backgroundColor: "transparent",
              // textDecoration: "underline",
              textUnderlineOffset: "4px",
              // textDecorationColor: theme("colors.brand-red.700"),
              textDecorationThickness: "3px",
              // color: theme("colors.brand-red.700"),
              transition: "all 0.2s ease-in-out",
              display: "inline-block",
              "&:hover": {
                color: theme("colors.brand-red.base"),
                textDecorationColor: theme("colors.brand-red.base"),
              },
              "&:focus": {
                backgroundColor: theme("colors.brand-red.base"),
                color: "white",
                outline: "none",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
