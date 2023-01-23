import Image from 'next/image';
import style from './ukraine-section.module.scss';

export const UkraineSection: React.FC = () => {
  return (
    <section className={style.ukraineSection}>
      <>
        <h3 className={style.ukraineSection__title}>
          Все буде Україна!
        </h3>
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
