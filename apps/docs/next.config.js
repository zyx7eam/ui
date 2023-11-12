const withContentlayer = require('next-contentlayer').withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@geeks/ui'],
  async redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/button',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
