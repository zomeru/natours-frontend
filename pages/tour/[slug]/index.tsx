import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import styled from 'styled-components';

const StyledTourHero = styled.section`
  height: 500px;
  margin: 0 auto;
  background-image: ${(props: { image: string }) => `linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.9),
      rgba(40, 180, 133, 0.9)
    ), url('${props.image}')`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1,
  h2 {
    color: var(--color-white);
    text-transform: uppercase;
  }

  .tour-name {
    font-size: 80px;
    font-weight: 200;
  }

  .tour-location {
    font-size: 20px;
    font-weight: 400;
  }
`;

const StyledTourAbout = styled.section``;

interface TourProps {}

const Tour: React.FC<TourProps> = () => {
  const router = useRouter();
  const [tourData, setTourData] = useState<any>();

  useEffect(() => {
    const pathnames = window.location.pathname.split('/');
    const slug = pathnames[pathnames.length - 1];

    async function fetchData() {
      await axios
        .get(`http://localhost:8000/api/v1/tours/${slug}`)
        .then(res => {
          setTourData(res.data.data.data[0]);
          console.log(res.data.data.data[0]);
        })
        .catch(error => {
          console.log('ERROR 🤬', error.message);
        });
    }

    fetchData();
  }, []);

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
      <StyledTourHero
        image={`${process.env.NEXT_PUBLIC_STATIC_BASE_ENDPOINT}img/tours/${
          tourData && tourData.imageCover
        }`}
      >
        {tourData && (
          <>
            <h1 className='tour-name'>{`${tourData.name} Tour`}</h1>
            <h2 className='tour-location'>{`${tourData.startLocation.description}`}</h2>
          </>
        )}
      </StyledTourHero>
      <StyledTourAbout>h</StyledTourAbout>
    </Layout>
  );
};

export default Tour;
