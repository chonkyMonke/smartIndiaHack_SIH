/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      pops: ['Poppins', 'sans-serif'],
      bans: ['Bebas Neue', 'sans-serif']
    },
    extend: {
      colors: {
        'first': '#F45502', 
        'merry': '#470000',
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
        '128': '36rem',
        '120': '35rem',
        'mlg': '45rem',
        'vlg': '60rem'
      },
      width: {
        '128': '38rem',
        '120': '35rem',
      },
    },
  },
  plugins: [],
}
