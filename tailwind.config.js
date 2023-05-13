const { fontFamily, colors } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#666',
          50: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999",
          400: "#888",
          500: "#666",
          600: "#444",
          700: "#333",
          800: "#111",
          900: "#000",
        },
        success: {
          DEFAULT: '#0070F3',
          50: '#D4E8FF',
          100: '#C0DDFF',
          200: '#97C7FF',
          300: '#6EB1FF',
          400: '#469BFF',
          500: '#1D85FF',
          600: '#0070F3',
          700: '#0056BB',
          800: '#003C83',
          900: '#00224B',
          950: '#00162F'
        },
        ...colors,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
