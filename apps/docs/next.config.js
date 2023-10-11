const withContentlayer = require('next-contentlayer').withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['ui'],
  async redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/button',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
