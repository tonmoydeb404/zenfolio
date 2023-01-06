/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#16a34a",
          "primary-content": "#fff",
          secondary: "#ffffff",
          accent: "#F471B5",
          neutral: "#3D4451",
          "neutral-focus": "#273449",
          "base-100": "#f3f4f6",
          info: "#0CA5E9",
          success: "#059669",
          warning: "#FBBD23",
          error: "#dc2626",
          "--rounded-btn": "0.25rem",
        },
        dark: {
          primary: "#16a34a",
          "primary-content": "#fff",
          secondary: "#1e293b",

          accent: "#F471B5",
          neutral: "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#111A2C",
          "base-content": "#f3f3f3",
          info: "#0CA5E9",
          success: "#059669",
          warning: "#FBBD23",
          error: "#dc2626",
          "--rounded-btn": "0.25rem",
        },
      },
    ],
  },
};
