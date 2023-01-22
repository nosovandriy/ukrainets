import style from './hero-section.module.scss';

import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';
import { Button } from '../../../button';
import { HeroBanner } from './hero-banner';
import { useIsMounted } from 'hooks';
import { fontService } from '@services/font-service';

export const HeroSection: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <main className={style.heroSection}>
      <div className={style.details}>
        <div className={style.title}>
          <h1 className={fontService.getMachinaFont().className}>
            Міжнародні перевезення посилок з Лондона в Україну
          </h1>
        </div>

        <MediaQuery maxWidth={breakPoints.fromTablet}>
          <HeroBanner />
        </MediaQuery>

        <div className={style.text}>
          <p>Отримай посилку вже наступного тижня!</p>
        </div>

        <div className={style.buttons}>
          <Button type="primary" label="Передзвоніть мені" />
          <Button type="secondary" label="Дивитись розклад" />
        </div>
      </div>

      <MediaQuery minWidth={breakPoints.fromTablet}>
        <HeroBanner />
      </MediaQuery>
    </main>
  );
};
