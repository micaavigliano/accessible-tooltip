/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  theme: {
    extend: {},
  },
  plugins: [],
};
