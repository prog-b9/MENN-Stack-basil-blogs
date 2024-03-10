// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.6rem",
      },
    },
    colors: {
      primaryColor: "#5856ba",
      secondColor: "#D87227",
      titleColor: "#333",
      descColor: "#374151",
      gold: "#BA8748",
      cream: "#EDE6D6",
      light: "#F5F8FA",
    },
  },
  plugins: [],
});
