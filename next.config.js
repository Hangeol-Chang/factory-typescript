/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://hangeol-chang.github.io/factory-typescript";

const nextConfig = {
  reactStrictMode: false,
  assetPrefix: !debug ? `${repository}/` : "/", 
  trailingSlash: true,

  images: {
    loader: 'akamai',
    path: '/',
    unoptimized : true
  }
}

module.exports = nextConfig