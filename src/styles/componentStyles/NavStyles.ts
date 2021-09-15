import styled from 'styled-components';

export const StyledNav = styled.header`
  margin: 0 auto;
  max-width: var(--max-width);
  height: var(--nav-height);
  padding: 0 50px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

export const StyledLinkList = styled.ul`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  li {
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;
