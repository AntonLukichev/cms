import React, { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const CmsHead: FC<{ title: string; description: string }> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

const Layout: FC<LayoutProps> = (
  {
    children,
    title = 'CMS boilerplate',
    description = 'Page CMS boilerplate',
  }
) => (
  <>
    <CmsHead
      title={title}
      description={description}
    />
    <Header />
    <main
      data-testid="mainLayout"
    >
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
