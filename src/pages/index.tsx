import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const IndexPage: React.FunctionComponent = () => (
  <>
    <Header />
    <div>
      <p>Hello Next.js</p>
    </div>
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  </>
);

export default IndexPage;
