/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const withImages = require('next-images')

const images = withImages({
  future: {
    webpack5: true
  }
})
module.exports = {
  i18n,
  reactStrictMode: true,
  images
};
