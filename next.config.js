// next.config.js
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    // Exclude service worker from development builds
    if (!dev) {
      config.plugins.push(
        new GenerateSW({
          swDest: 'static/service-worker.js',
          clientsClaim: true,
          skipWaiting: true,
        })
      );
    }

    return config;
  },
};
