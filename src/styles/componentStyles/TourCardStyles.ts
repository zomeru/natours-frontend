import styled from 'styled-components';

export const StyledTourCard = styled.div`
  max-width: 320px;
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;

  :hover .image-overlay {
    opacity: 0;
  }

  .card-image {
    height: 150px;
    width: 100%;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    position: relative;
  }

  .image-overlay {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.7),
      rgba(40, 180, 133, 0.7)
    );
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 33;
    opacity: 1;
    transition: var(--transition2);
  }
`;
