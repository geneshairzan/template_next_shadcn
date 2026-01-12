/** @type {import('next').NextConfig} */
const path = require("path");
const isStatic = process.env.STATIC_EXPORT === "true";
const nextConfig = {
  devIndicators: false,
  output: isStatic ? "export" : undefined,
  trailingSlash: isStatic ? true : false,
  images: {
    unoptimized: isStatic,
  },
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     react: path.resolve(__dirname, "node_modules/react"),
  //     "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
