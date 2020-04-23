const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
const NODE_MODULES = path.join(__dirname, '../node_modules');

module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH, STORIES_PATH],
      exclude: NODE_MODULES,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json'),
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
