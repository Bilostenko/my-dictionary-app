export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#050505",
          800: "#1F1F1F",
          700: "#2D2D2D",
          600: "#3A3A3A",
          500: "#757575",
          100: "#E9E9E9",
          50: "#F4F4F4",
          white: "#FFFFFF",
        },
        accent: {
          purple: "#A445ED",
          red: "#FF5252",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
      fontSize: {
        "heading-l": ["64px", "77px"],
        "heading-m": ["24px", "29px"],
        "heading-s": ["20px", "24px"],
        "body-m": ["18px", "24px"],
        "body-s": ["14px", "17px"],
      },
    },
  },
  plugins: [],
};
