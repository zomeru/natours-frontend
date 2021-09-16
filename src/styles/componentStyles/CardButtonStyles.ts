import styled from 'styled-components';

export const StyledCardButton = styled.a`
  padding: 10px 10px;
  background-color: var(--color-green);
  border-radius: 20px;
  transform: translateY(0);
  transition: var(--transition3);

  :hover {
    transform: translateY(-3px);
    background-color: var(--color-green-dark);
  }

  .button-text {
    color: var(--color-white);
    font-weight: 300;
    text-transform: uppercase;
  }
`;
