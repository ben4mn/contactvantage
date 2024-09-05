module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        navy: {
          DEFAULT: '#1D3557', // Deep Navy Blue
        },
        turquoise: {
          DEFAULT: '#00BFA6', // Bright Turquoise
        },
        // Secondary Colors
        softgray: {
          DEFAULT: '#F5F5F5', // Soft Gray
        },
        orange: {
          DEFAULT: '#FF6F00', // Electric Orange
        },
        // Accent Colors
        limegreen: {
          DEFAULT: '#A3E635', // Lime Green
        },
        purple: {
          DEFAULT: '#8E44AD', // Soft Purple
        },
      },
    },
  },
  plugins: [],
}