import React, { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';

export const actWraper = (): void => {
  // for clear React components
};

export const themeWraper = (component: ReactNode): ReactElement => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
