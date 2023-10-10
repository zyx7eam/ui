const withContentlayer = require('next-contentlayer').withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
};

module.exports = withContentlayer(nextConfig);
