import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Nav from '@components/Nav';

interface LayoutProps {
  seo: NextSeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <div id='root'>
      <NextSeo {...seo} />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
