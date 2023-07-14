const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new InjectManifest({
      maximumFileSizeToCacheInBytes: 10000,
      swSrc: 'sw.js',
    }),
  ],
};