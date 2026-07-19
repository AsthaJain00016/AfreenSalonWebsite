/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#ffffff",
        beige: {
          DEFAULT: "#F8F5F2",
          deep: "#efe7de",
        },
        rose: {
          light: "#e7c7ce",
          DEFAULT: "#B76E79",
          deep: "#8c4a54",
        },
        champagne: "#d9c3a9",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl2: "18px",
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(17,17,17,0.25)",
        soft: "0 10px 30px -12px rgba(17,17,17,0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        loadbar: {
          "0%": { left: "-40%" },
          "50%": { left: "60%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        loadbar: "loadbar 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
