import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Hero from '@components/sections/Hero';
import Tours from '@components/sections/Tours';

const Home: NextPage = () => {
  return (
    <Layout
      seo={{
        title: 'Natures PH | Zomer Cutie',
        description: 'Nature Tours in the Philippines',
        twitter: {
          site: 'https://iLoveYou:3000/',
          cardType: 'summary_large_image',
          handle: '@natoursph',
        },
      }}
    >
      <Hero />
      <Tours />
    </Layout>
  );
};

export default Home;
