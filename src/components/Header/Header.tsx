import React, { FC } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: theme.spacing(1),
  },
}));

const Header: FC = () => {
  const classes = useStyles();
  return (
    <header data-testid="header">
      <Link href="/">
        <a title="Home" className={classes.link}>Home</a>
      </Link>
      <Link href="/posts">
        <a title="Posts" className={classes.link}>Posts</a>
      </Link>
      <Link href="/about">
        <a title="About Page" className={classes.link}>About</a>
      </Link>
    </header>
  );
};

export default Header;
