/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "factory-typescript";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "/", 
  // basePath : !debug ? `/${repository}/` : "",
  trailingSlash: true,

  // images: {
  //   loader: 'akamai',
  //   path: '/',
  // }
}

module.exports = nextConfig