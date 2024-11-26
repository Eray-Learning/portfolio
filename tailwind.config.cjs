/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#106775",
        bg_light_primary: "#FAFAFA",
        bg_dark_primary: "#68450D",
        gray: "#B7C5D3",
        h1_color: "#EF2929",
        par_color: "#2E3436", 
        h2_title: "#17B5FF",
        body_color: "#FAFAFA",
        subtitle: "#F79824",
        bg_skills: "#F5F8FA"

      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #FDF8D4 0.48%, #FFE933 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
