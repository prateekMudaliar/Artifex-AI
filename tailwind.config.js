// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./public/images/mainBg.jpg')",
      },
    }
  },
  plugins: [],
}
