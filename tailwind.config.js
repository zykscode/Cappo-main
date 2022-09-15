/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './layouts/**/*.jsx',
    './lib/**/*.jsx',
    './data/**/*.mdx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require("tailwind-gradient-mask-image"),
  require("flowbite/plugin")
  ],
}