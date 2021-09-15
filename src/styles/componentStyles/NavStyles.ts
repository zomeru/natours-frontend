import styled from 'styled-components';

export const StyledNav = styled.header`
  width: 100%;
  height: var(--nav-height);
  /* background-color: var(--color-green-light); */
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

  li {
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;
