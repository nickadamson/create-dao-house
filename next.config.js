/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.zora.co', 'ipfs.io'],
  },
};

module.exports = nextConfig;
