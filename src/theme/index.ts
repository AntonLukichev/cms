import { createMuiTheme } from '@material-ui/core/styles';

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
      contrastText: '#000',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
