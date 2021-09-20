import React from 'react';
import Link from 'next/link';
import { StyledCardButton } from '@styles/CardButtonStyles';

type TargetType = '_blank' | '_self' | '_parent' | '_top';

interface CardButtonProps {
  href: string;
  buttonText: string;
}

const CardButton: React.FC<CardButtonProps> = ({ href, buttonText }) => {
  return (
    <Link href={href} passHref>
      <StyledCardButton>
        <p className='button-text'>{buttonText}</p>
      </StyledCardButton>
    </Link>
  );
};

export default CardButton;
