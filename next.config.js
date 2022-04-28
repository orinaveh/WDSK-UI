const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

/** @type {import('next').NextConfig} */
const nextConfig = withConfig({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  }
});

module.exports = nextConfig;
