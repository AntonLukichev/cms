import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    display: 'flex',
    border: 0,
    borderRadius: theme.spacing(0.5),
    width: '100%',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset',
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
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    color: theme.palette.primary.contrastText,
  },
}));
