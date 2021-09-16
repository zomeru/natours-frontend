import React from 'react';
import { StyledCardButton } from '@styles/CardButtonStyles';

type TargetType = '_blank' | '_self' | '_parent' | '_top';

interface CardButtonProps {
  href: string;
  buttonText: string;
  target?: TargetType;
  rel?: string;
}

const CardButton: React.FC<CardButtonProps> = ({
  href,
  target,
  rel,
  buttonText,
}) => {
  return (
    <StyledCardButton href={href} target={target} rel={rel}>
      <p className='button-text'>{buttonText}</p>
    </StyledCardButton>
  );
};

export default CardButton;
