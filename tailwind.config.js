/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9500ff', // Orange color as the primary color
        },
        secondary: {
          DEFAULT: '#808080', // Orange color as the primary color
        },
        back: {
          DEFAULT: '#F7F7F7', // Orange color as the primary color
        },
        back2: {
          DEFAULT: '#E5E4E2', // Orange color as the primary color
        },
        back3: {
          DEFAULT: '#fff', // Orange color as the primary color
        },
        text1: '#212529',
        text2: '#959595',
        text3: '#f1c40f',
        link: "#6c757d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
