import React, { FC } from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header: FC = () => (
  <header>
    <Link href="/">
      <a style={linkStyle} title="Home">Home</a>
    </Link>
    <Link href="/posts">
      <a style={linkStyle} title="Posts">Posts</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} title="About Page">About</a>
    </Link>
  </header>
);

export default Header;
