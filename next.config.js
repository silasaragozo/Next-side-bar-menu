/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    swcMinify: false // it should be false by default 

  },
}
module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,

})