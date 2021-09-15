import TourCard from '@components/TourCard';
import React from 'react';

interface ToursProps {}

const Tours: React.FC<ToursProps> = () => {
  return (
    <section id='tours'>
      <h3>Tours</h3>
      <div>
        <TourCard />
      </div>
    </section>
  );
};

export default Tours;
