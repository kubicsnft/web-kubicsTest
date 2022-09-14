/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["ipfs.io", "kubicsnft.mypinata.cloud"],
  },
};

/* module.exports = {
  env: {
    RINKEBY_URL: process.env.RINKEBY_URL,
  },
}; */
