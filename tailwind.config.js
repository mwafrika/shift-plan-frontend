export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#c70548",
      green: "#00a859",
      primary: "#032D7C",
      secondary: "#039BE5",
      background: "#F7F7F7",
      authBackground: "#F8F4F4",
    },
    fontFamily: {
      sans: ["poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
      mono: ["Poppins", "monospace"],
      heading: ["Poppins", "sans-serif"],
    },
    screens: {
      tablet: { max: "800px" },
      sm: { max: "640px" },
      md: "801px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
