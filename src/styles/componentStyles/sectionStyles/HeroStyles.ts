import styled from 'styled-components';

export const StyledHero = styled.section`
  padding: 0;
  margin: 0;
  max-width: 100vw;
  width: 100vw;
  min-height: 300px;
  height: calc(50vw - 40px);
  max-height: 400px;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.9),
      rgba(40, 180, 133, 0.9)
    ),
    url('https://raw.githubusercontent.com/zomeru/natours-frontend/main/src/assets/images/hero-bg.jpg');
  background-position: center;
  background-size: cover;
`;

export const StyledHeroContainer = styled.div`
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  text-transform: uppercase;

  h1 {
    font-size: 80px;
    font-weight: 200;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;
