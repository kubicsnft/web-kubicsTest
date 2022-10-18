/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "kubicsnft.mypinata.cloud"],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig,withBundleAnalyzer({
  reactStrictMode: true,
});

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
// });

