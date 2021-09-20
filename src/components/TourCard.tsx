import React from 'react';
import Image from 'next/image';
import boracay from '../assets/images/boracay.jpg';
import CardButton from '@components/CardButton';
import { StyledTourCard } from '@styles/TourCardStyles';

interface TourCardProps {
  name: string;
  summary: string;
  price: number;
  ratingAverage: number;
  ratingQuantity: number;
  tourLink: string;
  image: string;
  alt: string;
}

const TourCard: React.FC<TourCardProps> = ({
  name,
  summary,
  price,
  ratingAverage,
  ratingQuantity,
  tourLink,
  image,
  alt,
}) => {
  return (
    <StyledTourCard>
      <div className='card-image'>
        <div className='image-wrapper'>
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_BASE_ENDPOINT}/img/tours/${image}`}
            alt={alt}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            quality={30}
          />
          <div className='image-overlay' />
        </div>
      </div>

      <div className='tour-info'>
        <div className='tour-about'>
          <h3 className='tour-name'>{name}</h3>
          <p className='tour-description'>{summary}</p>
        </div>

        <div className='tour-price'>
          <div>
            <p>
              <span>&#8369;{price}</span> per person
            </p>
            <p>
              <span>{ratingAverage}</span> rating ({ratingQuantity})
            </p>
          </div>
          <CardButton href={tourLink} buttonText='Details' />
        </div>
      </div>
    </StyledTourCard>
  );
};

export default TourCard;
