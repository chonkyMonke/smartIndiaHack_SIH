/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      pops: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'first': '#F45502', 
        'alt': '#FF9900', 
        'bgbody':'#f3f6fd',
        'bg': '#f8fafc', 
        'dbg': '#2a2a35', 
        'body': '#ffffff', 
        'sbody': '#414353', 
        'txt': '#343339',
        'altxt': '#424145', 
        'dtxt': '#cccdd0', 
        'daltxt': '#d5d5e2', 
      },
      fontSize:{
        'cus':'1.614rem',
        'cus2':'2rem'
      },
      fontWeight:{
        'cus':'790'
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
}
