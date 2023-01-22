import localFont from '@next/font/local'

import { Montserrat } from '@next/font/google';

export const montserratFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--montserratFont-font',
  display: 'swap',
})

// class FontService {
//   getMachinaFont() {
//     const pPNeueMachina = localFont({
//       src: [
//         {
//           path: '../font/PPNeueMachina-400.otf',
//           weight: '400',
//         },
//         {
//           path: '../font/PPNeueMachina-800.otf',
//           weight: '800',
//         },
//       ],
//     });

//     return pPNeueMachina;
//   }

//   getMontserratFont() {
//     const montserratFont = Montserrat({
//       subsets: ['latin', 'cyrillic'],
//       weight: ['400', '500', '600'],
//       variable: '--montserratFont-font',
//       display: 'swap',
//     })

//     return montserratFont;
//   }
// }

// export const fontService = new FontService();