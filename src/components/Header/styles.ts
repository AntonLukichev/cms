import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    transition: 'all 150ms ease 0s',
    fontFamily: 'Roboto',
  },
  fixed: {
    position: 'fixed',
    zIndex: 1000,
  },
  absolute: {
    position: 'absolute',
    zIndex: 1000,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${theme.palette.primary.main}`,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${theme.palette.secondary.main}`,
  },
  white: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    boxShadow: `0 4px 16px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${theme.palette.grey[100]}`,
  },
  black: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    boxShadow: 'none',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.contrastText,
    boxShadow: 'none',
  },
  toolbarRoot: {
    width: '100%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerFull: {
    width: '100vw',
  },
}));
