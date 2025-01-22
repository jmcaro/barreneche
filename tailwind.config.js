// filepath: /Users/josemiguelcaroarroyo/Documents/Proyectos/barreneche/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      colors: {
        "orange-ua": "#E16F23",
        "blue-ua": "#1F3B75",
      },
      animation: {
        'fade-in-out': 'fadeIn 1s ease-in-out forwards, fadeOut 1s ease-in-out 5s forwards', // Aparece en 1s, espera 5s, desaparece en 1s
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
};
