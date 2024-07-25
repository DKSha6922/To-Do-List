/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#131842",
        "secondry":"#ECCEAE",
        "text":"#FBF6E2",
        "optional":"#E68369",
      },
    },
    
  },
  plugins: [],
};
