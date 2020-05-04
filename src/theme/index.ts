import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // https://material.io/resources/color/#!/
  // https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=22283d&secondary.color=6cc164
  palette: {
    primary: {
      light: '#4b5068',
      main: '#22283d',
      dark: '#000018',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9ef493',
      main: '#19857b',
      dark: '#399037',
      contrastText: '#111',
    },
    background: {
      default: '#fafafa',
    },
  },
});

// theme2 from https://mode.com/
// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=393945&secondary.color=267b48&primary.text.color=ffffff&secondary.text.color=ffffff

// theme3 https://marvelapp.com/styleguide/design/color-scheme

export default responsiveFontSizes(theme);
