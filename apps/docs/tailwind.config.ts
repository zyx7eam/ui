// module.exports = require('config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('config/tailwind.config')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
};
