import '../styles/globals.scss';

import type { AppProps } from 'next/app';

import { fontService } from '../services';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={fontService.getMontserratFont().className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
