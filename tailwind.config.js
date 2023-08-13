/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bodins: ["bodin", "sans-serif"],
      },
      colors: {
        purple: "#530054",
        empower: "#FCF5FF",
        body: "#777",
        progressGreen: "#30B700",
        progressBackground: "#EEE",
      },
      backgroundImage: {
        hero_bg: "url('/src/assets/hero-bg.svg')",
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/src/assets/hero.svg')",
        join: "url('./src/assets/join.svg')",
        hug: "linear-gradient(to right bottom, rgba('#171717',0.8), rgba('#171717',0.8)), url('/src/assets/hug.jpg')",
      },
    },
  },
  plugins: [],
};
