/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require('./framework/common/config');

const nextConfig = {
  reactStrictMode: true,
  framework: {
    name: "shopify"
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  }
}

module.exports = withFrameworkConfig(nextConfig)
