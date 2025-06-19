/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","src/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        credInputBg: '#dee5f2'
      },
      fontFamily:{
        "montserrat-regular":["Montserrat-Regular"],
        "montserrat-medium":["Montserrat-Medium"],
        "montserrat-bold":["Montserrat-Bold"],
        "montserrat-extrabold":["Montserrat-ExtraBold"],
        "montserrat-extralight":["Montserrat-ExtraLight"],
      },
    },
  },
  plugins: [],
}

