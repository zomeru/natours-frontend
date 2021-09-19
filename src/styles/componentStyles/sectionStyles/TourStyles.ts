import styled from 'styled-components';

export const StyledTours = styled.section`
  max-width: 1200px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
  }
`;

export const StyledTourContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: start;
`;
