/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "./views/**/*.{blade.php,ejs,pug}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
