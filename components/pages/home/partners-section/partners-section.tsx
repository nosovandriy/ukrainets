import style from './partners-section.module.scss';
import { ExternalLink } from '../../../external-link/external-link';
import { usePartners } from './hooks/usePartners';

export const PartnersSection: React.FC = () => {
  const { partners } = usePartners();

  return (
    <section className={style.partnersSection}>
      <h2 className={style.partnersSection__title}>
        Наші партнери
      </h2>
      <p className={style.partnersSection__subTitle}>
        Одні з найнадійніших логістичних компаній України
      </p>

      <div className={style.partnersSection__partnersLogo}>
        {partners.map(partner => (
          <ExternalLink
            key={partner.id}
            className={
              `${style["partnersSection__partnersLogo__image"]}
               ${style[`partnersSection__partnersLogo__image${partner.id}`]}`}
            href={partner.link}
          >
            {partner.logo}
          </ExternalLink>
        ))}
      </div>
    </section>
  );
};
