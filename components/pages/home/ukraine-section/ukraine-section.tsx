import style from './ukraine-section.module.scss';

import Image from 'next/legacy/image';

import { Title } from '@components/title';

export const UkraineSection: React.FC = () => {
  return (
    <section className={style.ukraineSection}>
      <>
        <Title title="Все буде Україна!" />

        <div className={style.ukraineSection__image}>
          <Image
            src="/heart-ukraine.png"
            layout="fill"
            alt="Picture of Ukraine heart"
          />
        </div>
      </>
    </section>
  );
};
