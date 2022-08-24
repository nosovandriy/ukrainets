import style from './hero-section.module.scss';

import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <main className={style.heroSection}>
      <div className={style.title}>
        <h1>Міжнародні перевезення посилок з Лондона в Україну</h1>
      </div>

      <div className={style.banner}>
        <Image
          src="/main-banner.png"
          width="270"
          height="380"
          layout="responsive"
          priority
          alt="Picture of delivery guy with parcels. Ukraine and England flag on background"
        />
      </div>

      <div>
        <p>Отримай посилку вже наступного тижня!</p>
      </div>
    </main>
  );
};
