import React from 'react';
import Image from 'next/image';
import boracay from '../assets/images/boracay.jpg';
import { StyledTourCard } from '@styles/TourCardStyles';

interface TourCardProps {}

const TourCard: React.FC<TourCardProps> = () => {
  return (
    <StyledTourCard>
      <div className='card-image'>
        <Image
          src={boracay}
          alt='Boracay'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          placeholder='blur'
        />
        <div className='image-overlay' />
      </div>

      <div></div>
      <div>
        <div>
          <p>Price</p>
          <p>Rating</p>
        </div>
      </div>
    </StyledTourCard>
  );
};

export default TourCard;
