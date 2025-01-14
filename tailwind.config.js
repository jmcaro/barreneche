/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      colors: {
        "orange-ua": "#E16F23",
        "blue-ua": "#1F3B75",
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
