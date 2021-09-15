import TourCard from '@components/TourCard';
import React from 'react';
import { StyledTours, StyledTourContainer } from '@sectionStyles/TourStyles';

interface ToursProps {}

const Tours: React.FC<ToursProps> = () => {
  return (
    <StyledTours id='tours'>
      <h2 className='section-title'>Discover Tours</h2>
      <StyledTourContainer>
        <TourCard />
        <TourCard />
        <TourCard />
      </StyledTourContainer>
    </StyledTours>
  );
};

export default Tours;
