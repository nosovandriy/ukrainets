import style from './partners-section.module.scss';
import { InTime, NovaPoshta, Meest, UkrPoshta } from '@components/icons';

export const PartnersSection: React.FC = () => {
  return (
    <section className={style.partnersSection}>
      <h2 className={style.partnersSection__title}>
        Наші партнери
      </h2>
      <p className={style.partnersSection__subTitle}>
        Одні з найнадійніших логістичних компаній України
      </p>

      <div className={style.partnersSection__partnersLogo}>
        <a
          className={style.partnersSection__partnersLogo__image}
          href="https://novaposhta.ua/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <NovaPoshta />
        </a>

        <a
          className={style.partnersSection__partnersLogo__image}
          href="https://www.ukrposhta.ua/ua"
          target="_blank"
          rel="noreferrer noopener"
        >
          <UkrPoshta />
        </a>

        <a
          className={style.partnersSection__partnersLogo__image}
          href="https://ua.meest.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Meest />
        </a>

        <a
          className={style.partnersSection__partnersLogo__image}
          href="https://intime.check-track.com/ua/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InTime />
        </a>
      </div>
    </section>
  );
};
