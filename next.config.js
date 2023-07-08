/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    customKey: "my-value",
  },
};

module.exports = nextConfig;
