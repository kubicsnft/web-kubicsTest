/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["ipfs.io", "kubicsnft.mypinata.cloud"],
  },
};

module.exports = nextConfig;
