import React, { FC, useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Theme,
  useMediaQuery,
  Hidden,
  IconButton,
  Drawer,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useStyles } from './styles';
import { HeaderProps, HeaderColors } from '../../types';

const Header: FC<HeaderProps> = ({
  fixed = true,
  color = HeaderColors.primary,
}) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  console.log(JSON.stringify({ isMobile, isTablet, isDesktop}));

  const classNameAppBar = clsx({
    [classes.fixed]: fixed,
    [classes.absolute]: !fixed,
    [classes[color]]: color,
  });

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar
      className={classNameAppBar}
      data-testid="header"
    >
      <Toolbar>
        <Link href="/">
          <a title="Home" className={classes.link}>Home</a>
        </Link>
        <Link href="/posts">
          <a title="Posts" className={classes.link}>Posts</a>
        </Link>
        <Link href="/about">
          <a title="About Page" className={classes.link}>About</a>
        </Link>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            onClick={handleMenuToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={menuOpen}
          onClose={handleMenuToggle}
        >
          <Link href="/">
            <a title="Home" className={classes.link}>Home</a>
          </Link>
          <Link href="/posts">
            <a title="Posts" className={classes.link}>Posts</a>
          </Link>
          <Link href="/about">
            <a title="About Page" className={classes.link}>About</a>
          </Link>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
