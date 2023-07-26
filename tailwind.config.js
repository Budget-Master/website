/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'project-green': {
          100: '#35C11F',
          200: '#60B653',
          300: '#4D9242',
          400: '#437F3A',
        },
        'project-gray': {
          100: '#EFEFEF',
          700: '#313131',
        },
        'project-red': {
          100: '#FF0E0E74',
        },
      },
    },
  },
  plugins: [],
}
