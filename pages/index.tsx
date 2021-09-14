import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Hero from '@components/sections/Hero';

const Home: NextPage = () => {
  return (
    <Layout
      seo={{
        title: 'Natours PH',
        description: 'Nature Tours in the Philippines',
        twitter: {
          site: 'https://natours-ph.ml/',
          cardType: 'summary_large_image',
          handle: '@natoursph',
        },
      }}
    >
      <Hero />
      <div className='h-10'></div>
    </Layout>
  );
};

export default Home;
