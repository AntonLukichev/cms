import React from 'react';
import { addDecorator } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../src/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      {story()}
    </CssBaseline>
  </ThemeProvider>
));
