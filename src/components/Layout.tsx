import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Nav from '@components/Nav';

interface LayoutProps {
  seo: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <div id='root' className='min-h-screen max-w-screen-2xl'>
      <NextSeo {...seo} />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
