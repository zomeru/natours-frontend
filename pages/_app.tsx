import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import axios from 'axios';
import GlobalStyles from 'src/styles/GlobalStyles';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Fragment>
  );
}
export default MyApp;
