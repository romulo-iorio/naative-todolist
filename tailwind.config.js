/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
      colors: {
        "blue-dark": "#1e6f9f",
        blue: "#4ea8de",
        "purple-dark": "#5e60ce",
        purple: "#8284fa",
        gray: {
          100: "#f2f2f2",
          200: "#d9d9d9",
          300: "#808080",
          400: "#333",
          500: "#262626",
          600: "#1a1a1a",
          700: "#0d0d0d",
        },
        danger: "#e25858",
      },
    },
  },
  plugins: [],
};
