/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/{pages,layouts,components}/**/*.jsx"],
   theme: {
      extend: {
         colors: {
            primary: "#4285f4",
         },
      },
   },
   plugins: [],
};
