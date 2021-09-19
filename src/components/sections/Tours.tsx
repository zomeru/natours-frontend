import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TourCard from '@components/TourCard';
import { StyledTours, StyledTourContainer } from '@sectionStyles/TourStyles';

interface ToursProps {}

const Tours: React.FC<ToursProps> = () => {
  const [tourData, setTourData] = useState<any>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:8000/api/v1/tours`)
        .then(res => {
          setTourData(res.data.data.data);
          console.log(res.data.data.data);
        })
        .catch(error => {
          console.log('ERROR 🤬', error.message);
        });
    }

    fetchData();
    setIsDataLoaded(true);
    console.log('set', tourData);
  }, []);

  return (
    <StyledTours id='tours'>
      <h2 className='section-title'>Discover Tours</h2>
      <StyledTourContainer>
        {isDataLoaded &&
          tourData.map(tour => {
            return (
              <TourCard
                key={tour.slug}
                name={tour.name}
                summary={tour.summary}
                price={tour.price}
                ratingAverage={tour.ratingsAverage}
                ratingQuantity={tour.ratingsQuantity}
                tourLink={`/tour/${tour.slug}`}
                image={tour.imageCover}
                alt={tour.name}
              />
            );
          })}
      </StyledTourContainer>
    </StyledTours>
  );
};

export default Tours;
