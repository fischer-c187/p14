/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "hrnet-green": "#93AD18",
      },
      translate: {
        "negative-full": "-100%",
      },
    },
  },
  plugins: [],
};
