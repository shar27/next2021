const withVideos = require('next-videos')


module.exports= withVideos()

module.exports = {
 
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
 
  images: {
    domains: ['images.ctfassets.net'],
  
  },
  esLint: {
    ignoreDuringBuilds: true,
  },
  "presets": ["next/babel"]
}
