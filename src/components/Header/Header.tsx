import React, { FC } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { HeaderProps, HeaderColors } from '../../types';

const Header: FC<HeaderProps> = ({
  fixed = true,
  color = HeaderColors.primary,
}) => {
  const classes = useStyles();
  const classNameAppBar = clsx({
    [classes.fixed]: fixed,
    [classes.absolute]: !fixed,
    [classes[color]]: color,
  });
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
