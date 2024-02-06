/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundPosition: {
        "12-center": "12px center",
      },
      backgroundImage: {
        glass: "url('/src/assets/search.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "hrnet-green": "#93AD18",
        citron: {
          50: "hsl(66, 84%, 95%)",
          100: "hsl(66, 78%, 89%)",
          200: "hsl(67, 79%, 80%)",
          300: "hsl(68, 75%, 67%)",
          400: "hsl(68, 69%, 55%)",
          500: "hsl(69, 72%, 44%)",
          600: "hsl(70, 76%, 39%)",
          700: "hsl(72, 70%, 27%)",
          800: "hsl(72, 60%, 23%)",
          900: "hsl(73, 53%, 20%)",
          950: "hsl(75, 73%, 10%)",
        },
      },
      translate: {
        "negative-full": "-101%",
      },
      margin: {
        "screen-quarter": "25vh",
      },
    },
  },
  plugins: [],
};
