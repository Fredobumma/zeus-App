/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      bigTab: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      accent: ["Lexend Deca", "sans-serif"],
      heading: ["Syne", "sans-serif"],
    },
    extend: {
      width: {
        81: "81px",
        85: "85.33",
        121: "121px",
        135: "135px",
        150: "150px",
        "sp-x1": "241px",
        sprite: "412px",
      },
      spacing: {
        minmax: "min(4vw, 16px)",
        "minmax-2": "min(2vw, 12px)",
      },
      maxWidth: {
        400: "400px",
        415: "415px",
        700: "700px",
        "80%": "80%",
        "90%": "90%",
      },
      height: {
        sprite: "396px",
      },
      gridTemplateColumns: {
        faq: "1fr 2fr",
      },
      fontSize: {
        28: ["28px", "36px"],
        32: ["32px", "42px"],
        40: ["40px", "72px"],
        80: ["80px", "96px"],
        "3xl": ["32px", "48px"],
        "5xl": ["48px", "64px"],
        "7xl": ["72px", "88px"],
        xs: "12px",
      },
      colors: {
        secondary: "#532C59",
        line: "#CCD5DF",
      },
      boxShadow: {
        custom1:
          "rgba(192, 166, 225, 0.5) 0px 0px 0px 2px, rgba(162, 169, 177, 0.65) 0px 4px 6px -1px, rgba(62, 62, 192, 0.08) 0px 1px 0px inset",
      },
      borderRadius: {
        15: "15px",
        "4xl": "40px",
      },
      backgroundImage: {
        actFocHov:
          "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        callOut:
          "radial-gradient(circle, rgba(255, 255, 255, 1) 60%, rgb(230, 214, 255) 100%)",
        hero: "radial-gradient(circle, rgba(251,226,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)",
        testimonial:
          "linear-gradient(to bottom, rgba( 255, 255, 255, 0.2 ) 50%, rgba( 255, 255, 255, 0.8 ) 70%, rgba( 255, 255, 255, 1 ) 90% )",
      },
    },
  },
  plugins: [],
};
