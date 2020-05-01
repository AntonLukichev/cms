import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Roboto, sans-serif',
};

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const CmsHead: FC<{ title: string; description: string }> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  </Head>
);

const Layout: FC = (
  {
    children,
    title = 'CMS boilerplate',
    description = 'Page CMS boilerplate',
  }: LayoutProps,
) => (
  <>
    <CmsHead
      title={title}
      description={description}
    />
    <Header />
    <main
      style={layoutStyle}
      data-testid="mainLayout"
    >
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
