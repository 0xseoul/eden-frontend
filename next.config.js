/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  //
  images: {
    domains: ["res.cloudinary.com", "dummyimage.com"],
  },
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      http: false,
      https: false,
      crypto: false,
      stream: false,
      querystring: false,
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
