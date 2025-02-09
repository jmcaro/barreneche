// filepath: /Users/josemiguelcaroarroyo/Documents/Proyectos/barreneche/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      colors: {
        "orange-ua": "#D85819", // Naranja institucional (Primary)
        "blue-ua": "#143163", // Azul institucional
        "yellow-ua": "#FFB300", // Amarillo institucional más vivo
        "light-orange-ua": "#F9B233", // Naranja claro
        "light-blue-ua": "#1D71B8", // Azul claro
        "gray-ua": "#706F6F", // Gris institucional
        "warning-ua": "#E4A11B", // Un amarillo ámbar más notorio, evitando parecerse a primary
        "error-ua": "#C53030", // Un rojo más vibrante para distinguirse mejor
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
    themes: [
      {
        uniatlantico: {
          "primary": "#143163",
          "secondary": "#D85819",
          "accent": "#F9B233",
          "neutral": "#706F6F",
          "base-100": "#ffffff",
          "info": "#1D71B8",
          "success": "#FF9912",
          "warning": "#E4A11B", // Amarillo ámbar vibrante para advertencias
          "error": "#C53030", // Rojo fuerte para errores
        },
      },
      "light", "dark", "winter" // Puedes mantener otros temas si deseas
    ],
  },
};
