const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
const NODE_MODULES = path.join(__dirname, '../node_modules');

module.exports = {
  stories: ["../stories/**/*.stories.(ts|tsx)"],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-a11y/register',
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
