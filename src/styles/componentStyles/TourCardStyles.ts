import styled from 'styled-components';

export const StyledTourCard = styled.div`
  width: 300px;
  height: 450px;
  margin: 0 20px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;

  :hover .image-overlay {
    opacity: 0;
  }

  .card-image {
    height: 180px;
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

  .tour-info {
    height: calc(450px - 180px);
    text-align: left;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-white-dirty);
  }

  .tour-title {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  .tour-description {
    font-weight: 400;
  }

  .tour-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 400;
    }

    span {
      font-weight: 500;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
