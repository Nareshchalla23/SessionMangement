const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = withModuleFederationPlugin({
  name: 'session2',

  exposes: {
    './Session2RemoteModule': './projects/session2/src/session2-remote.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // Add this section to expose the specific asset
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/chris-leipelt-kWd5ER2XpSg-unsplash.jpg',
          to: 'assets/chris-leipelt-kWd5ER2XpSg-unsplash.jpg'
        }
      ]
    })
  ]
});
