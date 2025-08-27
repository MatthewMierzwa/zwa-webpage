// import animate from 'tailwindcss-animate';

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/**/*.{ts,tsx}",
    "./app/globals.css", // <--- this matters if using @apply in CSS!
  ],
  // plugins: [animate],
};

export default config;
