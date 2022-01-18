const withVideos = require('next-videos')


module.exports= withVideos()

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  
  },
  esLint: {
    ignoreDuringBuilds: true,
  },
  "presets": ["next/babel"]
}
