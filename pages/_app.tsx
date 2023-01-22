import '../styles/globals.scss';

import type { AppProps } from 'next/app';

import { montserratFont } from '../services';
// import localFont from '@next/font/local'

// import { Montserrat } from '@next/font/google';
// const pPNeueMachina = localFont({
//   src: [
//     {
//       path: '../font/PPNeueMachina-400.otf',
//       weight: '400',
//     },
//     {
//       path: '../font/PPNeueMachina-800.otf',
//       weight: '800',
//     },
//   ],
// });

// const montserratFont = Montserrat({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['400', '500', '600'],
//   variable: '--montserratFont-font',
//   display: 'swap',
// })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <style jsx global>{`
    html {
      font-family: ${pPNeueMachina.style.fontFamily};
    }
  `}
      </style> */}
      <main className={montserratFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
