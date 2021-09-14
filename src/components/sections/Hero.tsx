import React from 'react';

interface HeroProps {}

const heroStyles = {
  backgroundImage:
    'linear-gradient(to right bottom, rgba(126,213,111,0.9), rgba(40,180,133,0.9)), url(https://www.wallpapers13.com/wp-content/uploads/2019/06/Philippines-Puerto-Princesa-Beautiful-Tropical-Beach-Nature-Landscape-Photo-sandy-beach-sea-boat-palm-tree-HD-Desktop-Wallpaper-1920x1080.jpg)',
  // height: 'calc(100vh - 4rem)',
  // opacity: '.6',
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      style={heroStyles}
      className='flex flex-col justify-center text-center text-white bg-center bg-cover h-96'
    >
      <h1 className='mb-5 text-7xl'>Natours PH</h1>
      <h2 className='text-4xl'>Outdoors is where life happens</h2>
    </div>
  );
};

export default Hero;
