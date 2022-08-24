/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        primary: "#B6FF00",
        text: "#FFFFF",
        "c-gray100": "#ECECEC", // text ,
        "c-gray200": "#C8CCD1", // text,
        "c-gray300": "#72777D", // circle
        "c-gray400": "#292A2B", // background circle
        gradient:
          "linear-gradient(270deg, #B6FF00 0%, rgba(182, 255, 0, 0.584078) 41.59%, rgba(182, 255, 0, 0) 100%)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.25rem",
        xl: "4rem",
        "2xl": "6rem",
        "3xl": "8rem",
      },
      width: {
        wearable: "78rem",
      },
      height: {
        header: "150px",
      },
      maxWidth: {
        "wearable-max": "78rem",
      },
      margin: {
        header: "150px",
        footer: "70px",
      },
    },
  },
  plugins: [],
};
