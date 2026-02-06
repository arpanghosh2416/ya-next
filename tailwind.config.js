// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "rgb(175, 67, 153)",
          blue: "rgb(55, 131, 197)",
          lightblue: "rgb(86, 159, 214)",
          slogan: "rgb(178, 203, 177)",
          white: "rgb(255, 255, 255)",
          black: "rgb(0, 0, 0)",
          oldBlue: "rgb(0, 198, 253)",
        },
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
