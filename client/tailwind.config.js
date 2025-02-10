/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans"],
        "dm-sans": ["DM Sans"],
        montserrat: ["Montserrat"],
        jaro: ["Jaro"],
        Inter: ["Inter"],
      },
      colors: {
        // dummy colors
        base: "#FCF5E5",
        primary: "#4f46e5",
        light: "#fff",
        lightShaded: "#f3f3f3",
        dark: "#333",
        darkShaded: "#1a1a1a",
        danger: "#ef4444",
        borderGray: "#9ca3af",
        borderLight: "#FFFFFF",
        radius: "8px 0px 8px 0px",
      },
      backgroundImage: {
        "base-gradient": "linear-gradient(to right, #1F2937, #000000)",
        "radical-gradient":
          "radial-gradient(circle, #F34545 13%, #E4B673 54%, #6F98BD 71%, #7DAEBA 89%, #DFABC0 99%, #1F2937 30%, #000000 100%)",
        // custom radical
        // "custom-radial": `
        //   radial-gradient(49% 81% at 45% 47%, #F34544 13%, rgba(7, 58, 255, 0) 100%),
        //   radial-gradient(113% 91% at 17% -2%, #E4B673 54%, rgba(255, 0, 0, 0) 99%),
        //   radial-gradient(142% 91% at 83% 7%, #6F9B8D 71%, rgba(255, 0, 0, 0) 99%),
        //   radial-gradient(142% 91% at -6% 74%, #7DAEBA 89%, rgba(255, 0, 0, 0) 99%),
        //   radial-gradient(75% 75% at 50% 50%, #DFABC0 99%, rgba(7, 58, 255, 1) 100%)
        // `,
        // cus
        "btn-gradient":
          "linear-gradient(to right, #FFB21E 0%, #FF7E48 17%, #FF7C4A 39%, #FF676D 100%)",
      },

      fontSize: {
        heading: "37px",
        items: "16px",
        mainHeading: "40px"
      },
      // "textColor": {
      //   "baseText": "#FFFFFF"
      // }
    },
  },
  plugins: [],
};
