import style from './quality-section.module.scss';

import Image from 'next/image';

import { useIsMounted } from 'hooks';

export const QualitySection: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section className={style.qualitySection}>
      <div className={style.worldImage}>
        <Image
          priority
          width="460"
          height="400"
          src="/world.png"
          alt="World icon"
        />
      </div>

      <div className={style.textContent}>
        <div className={style.title}>
          <h2>Ми відповідаємо за цілісність вантажу</h2>
        </div>

        <div className={style.text}>
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
