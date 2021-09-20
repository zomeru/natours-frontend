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

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-green);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--color-green);
    border-radius: 10px;
  }

  body {
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    letter-spacing: 1px;
    font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 500;
    color: var(--color-gray-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  section {
    max-width: var(--max-width);
    width: 100vw;
    margin: 60px auto;
    padding: 0 50px;
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

  .section-title {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--color-green);
  }
`;

export default GlobalStyles;
