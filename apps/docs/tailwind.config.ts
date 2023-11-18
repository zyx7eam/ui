const zyxuiConfigs = require('@zyxui/config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [zyxuiConfigs],
  content: [
    ...zyxuiConfigs.content,
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
};
