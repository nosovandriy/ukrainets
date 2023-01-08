import style from './quality-section.module.scss';

import Image from 'next/image';

import { useIsMounted } from 'hooks';
import { Title } from '../../../title';

export const QualitySection: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section className={style.qualitySection}>
      <div className={style.qualitySection__worldImage}>
        <Image layout="fill" src="/world.png" alt="World icon" />
      </div>

      <div className={style.qualitySection__textContent}>
        <Title title="Ми відповідаємо за цілісність вантажу" />

        <div className={style.qualitySection__textContent__text}>
          <p>
            «British Post» пропонує вам вигідні тарифи, гарантує якнайшвидшу
            доставку, та несе всю відповідальність за цілісність вантажу!
            Незалежно від того, хто ви — підприємець з великими об’ємами
            перевезень, чи приватний клієнт з невеликою посилкою, British Post
            підходить максимально уважно до кожного замовлення!
          </p>
        </div>
      </div>
    </section>
  );
};
