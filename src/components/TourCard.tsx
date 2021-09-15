import React from 'react';
import Image from 'next/image';
import boracay from '../assets/images/boracay.jpg';

interface TourCardProps {}

const TourCard: React.FC<TourCardProps> = () => {
  return (
    <div>
      <Image
        // className='relative'
        src={boracay}
        alt='Boracay'
        layout='intrinsic'
        objectFit='cover'
        objectPosition='center'
      />

      <div></div>
      <div>
        <div>
          <p>Price</p>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
