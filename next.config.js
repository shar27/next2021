const withVideos = require('next-videos')


module.exports= withVideos()

module.exports = {
  
  esLint: {
    ignoreDuringBuilds: true,
  },
  "presets": ["next/babel"]
}
