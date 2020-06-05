import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const customViewports = {
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '950px',
    },
  },
  laptopHidpi: {
    name: 'Laptop HiDPI',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  backgrounds: [
    { name: 'white', value: '#fafafa', default: true },
    { name: 'black', value: '#050505' },
    { name: 'primary light', value: '#4b5068' },
    { name: 'primary main', value: '#22283d' },
    { name: 'primary dark', value: '#000018' },
    { name: 'secondary light', value: '#9ef493' },
    { name: 'secondary main', value: '#19857b' },
    { name: 'secondary dark', value: '#399037' },
  ],
});
