import style from './partners-section.module.scss';

import { ExternalLink } from '../../../external-link/external-link';
import { usePartners } from './hooks/usePartners';
import { Title } from '@components/title';

export const PartnersSection: React.FC = () => {
  const { partners } = usePartners();

  return (
    <section className={style.partnersSection}>
      <Title title="Наші партнери" />

      <p className={style.partnersSection__subTitle}>
        Одні з найнадійніших логістичних компаній України
      </p>

      <div className={style.partnersSection__partnersLogo}>
        {partners.map((partner) => (
          <ExternalLink
            key={partner.id}
            className={`${style['partnersSection__partnersLogo__image']}
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
