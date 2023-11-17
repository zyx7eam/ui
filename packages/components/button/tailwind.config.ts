// tailwind config is required for editor support
import type { Config } from "tailwindcss";
const sharedConfig = require('@zyxui/config/tailwind.config')

const config: Config= {
  presets: [sharedConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;