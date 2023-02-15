import Image from 'next/legacy/image';

import style from './quality-section.module.scss';
import { Title } from '../../../title';

export const QualitySection: React.FC = () => {

  return (
    <section className={style.qualitySection}>
      <div className={style.qualitySection__container}>
        <div className={style.qualitySection__worldImage}>
          <Image
            layout="fill"
            src="/world.webp"
            alt="World icon"
          />
        </div>

        <div className={style.qualitySection__textContent}>

          <Title
            title="Ми відповідаємо за цілісність вантажу"
          />

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
      </div>
    </section>
  );
};
