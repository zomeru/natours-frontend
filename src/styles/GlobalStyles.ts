import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    scroll-behavior: smooth;
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    max-width: var(--max-width);
    font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 500;
    color: var(--color-gray-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    transition: var(--transition2);

    :link,
    :active,
    :visited,
    :focus {
      color: var(--color-gray-dark);
    }

    :hover {
      color: var(--color-green);
    }
  }

  ol,
  ul {
    list-style: none;
  }

  .link {
    color: var(--color-gray-dark);
    position: relative;

    :hover ::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -3px;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--color-green);
      transition: var(--transition2);
    }
  }
`;

export default GlobalStyles;
