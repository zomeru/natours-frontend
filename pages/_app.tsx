import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from 'src/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Fragment>
  );
}
export default MyApp;
