import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Roboto, sans-serif',
};

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const AppHeader: FC<{title: string}> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  </Head>
);

const Layout: FC = (
  {
    children,
    title = 'CMS boilerplate',
  }: LayoutProps,
) => (
  <>
    <AppHeader title={title} />
    <main style={layoutStyle}>
      <Header />
      {children}
    </main>
  </>
);

export default Layout;
