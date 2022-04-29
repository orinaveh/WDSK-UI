const withTM = require('next-transpile-modules')(['react-js-cron']);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  }
});

module.exports = nextConfig;
