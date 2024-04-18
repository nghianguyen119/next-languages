/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-real-linear":
          "linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, rgba(39, 39, 39, 0.22) 11%, rgba(255, 255, 255, 0.3) 27%, rgba(0, 0, 0, 0.24) 41%, rgba(0, 0, 0, 0.55) 52%, rgba(255, 255, 255, 0.26) 63%, rgba(0, 0, 0, 0.27) 74%, rgba(255, 255, 255, 0.3) 100%)",
        "gradient-top-down": `linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%)`,
        "gradient-blue-purple": `linear-gradient(45deg, rgba(85, 37, 130, 0.8) 0%, rgba(0, 128, 128, 0.8) 100%)`,
        "gradient-red-yellow": `linear-gradient(45deg, rgba(255, 0, 0, 0.8) 0%, rgba(255, 165, 0, 0.8) 100%)`,
        "gradient-green-blue": `linear-gradient(45deg, rgba(34, 139, 34, 0.8) 0%, rgba(70, 130, 180, 0.8) 100%)`,
        "gradient-dark-light": `linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)`,
      },
    },
  },
  plugins: [],
};
