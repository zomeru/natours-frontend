import React from 'react';
import { StyledHero, StyledHeroContainer } from '@sectionStyles/HeroStyles';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <StyledHero>
      <StyledHeroContainer>
        <h1>Natours</h1>
        <h2>Outdoors is where life happens</h2>
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
