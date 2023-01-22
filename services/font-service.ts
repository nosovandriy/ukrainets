import localFont from '@next/font/local';
import { Montserrat } from '@next/font/google';
import { NextFont, NextFontWithVariable } from '@next/font';

const montserratFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--montserratFont-font',
  display: 'swap',
});

const pPNeueMachinaFont = localFont({
  src: [
    {
      path: '../font/PPNeueMachina-400.otf',
      weight: '400',
    },
    {
      path: '../font/PPNeueMachina-800.otf',
      weight: '800',
    },
  ],
});

const pPNeueMachinaFontNew = localFont({
  src: [
    {
      path: '../font/PPNeueMachina-PlainUltrabold.otf',
      weight: '800',
    },
  ],
});

class FontService {
  montserratFont;
  machinaFont;

  constructor(montserratFont: NextFontWithVariable, machinaFont: NextFont) {
    this.montserratFont = montserratFont;
    this.machinaFont = machinaFont;
  }

  getMachinaFont(): NextFont {
    return this.machinaFont;
  }

  getMontserratFont(): NextFontWithVariable {
    return this.montserratFont;
  }
}

export const fontService = new FontService(montserratFont, pPNeueMachinaFont);
