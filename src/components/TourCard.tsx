import React from 'react';
import Image from 'next/image';
import boracay from '../assets/images/boracay.jpg';
import CardButton from '@components/CardButton';
import { StyledTourCard } from '@styles/TourCardStyles';

interface TourCardProps {}

const TourCard: React.FC<TourCardProps> = ({}) => {
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

      <div className='tour-info'>
        <div className='tour-about'>
          <h3 className='tour-title'>CARD TITLE</h3>
          <p className='tour-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque
            culpa rem aspernatur voluptatum alias?
          </p>
        </div>

        <div className='tour-price'>
          <div>
            <p>
              <span>&#8369;999</span> per person
            </p>
            <p>
              <span>4.8</span> rating (6)
            </p>
          </div>
          <CardButton href='#' buttonText='Details' />
        </div>
      </div>
    </StyledTourCard>
  );
};

export default TourCard;
