import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header: React.FunctionComponent = () => (
  <div>
    <Link href="/">
      <a style={linkStyle} title="Home">Home</a>
    </Link>
    <Link href="/posts">
      <a style={linkStyle} title="Posts">Posts</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} title="About Page">About</a>
    </Link>
  </div>
);

export default Header;
