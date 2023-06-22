/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#159cd6",
        
"secondary": "#c2e1fc",
        
"accent": "#722c99",
        
"neutral": "#342636",
        
"base-100": "#FFFFFF",
        
"info": "#85ACE0",
        
"success": "#74ECC8",
        
"warning": "#FBCF60",
        
"error": "#EE766D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

