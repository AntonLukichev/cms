import React, { FC, useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  // Theme,
  // useMediaQuery,
  Hidden,
  IconButton,
  Drawer,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useStyles } from './styles';
import { HeaderProps } from '../../types';

const Header: FC<HeaderProps> = ({
  fixed = true,
  color = 'primary',
  logo = true,
  drawer = {
    anchor: 'right',
    full: false,
  }
}) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  /* const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  console.log(JSON.stringify({ isMobile, isTablet, isDesktop })); */

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
        <Box
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          className={classes.toolbarRoot}
        >
          {logo && <Box flexShrink={0} p={1} flexGrow={1}>Logo</Box>}
          <Box>
            <Link href="/">
              <a title="Home" className={classes.link}>Home</a>
            </Link>
            <Link href="/posts">
              <a title="Posts" className={classes.link}>Posts</a>
            </Link>
            <Link href="/about">
              <a title="About Page" className={classes.link}>About</a>
            </Link>
          </Box>
          <Box flexShrink={0}>
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                onClick={handleMenuToggle}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Box>
        </Box>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={drawer.anchor}
          open={menuOpen}
          onClose={handleMenuToggle}
          className={clsx(classes.drawer, {
            [classes.drawerFull]: drawer.full, // TODO if full add close button
          })}
          classes={{
            paper: drawer.full ? classes.drawerFull : classes.drawerPaper,
          }}
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
          <Link href="/test">
            <a title="Posts" className={classes.link}>Test</a>
          </Link>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Header.whyDidYouRender = true;

export default Header;
