/** @type {import('next').NextConfig} */
const nextConfig = {
    addDir: true,
    transpilePackages: ['@zyxui/button', '@zyxui/lib', '@zyxui/config'],
  };
  
module.exports = nextConfig;