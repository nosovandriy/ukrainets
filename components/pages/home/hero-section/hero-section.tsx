import style from './hero-section.module.scss';

import type { NextComponentType } from 'next';

export const HeroSection: NextComponentType = () => {
  return (
    <main className={style.heroSection}>
      <h2>Hero section</h2>
    </main>
  );
};
