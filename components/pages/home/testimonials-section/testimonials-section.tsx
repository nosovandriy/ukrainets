import style from './testimonials-section.module.scss';

import { Quotes } from '@components/icons';
import { TestimonialsSlider } from './carousel';
import { Title } from '@components/title';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id={'testimonials-section'} className={style.testimonialsSection}>
      <div className={style.testimonialsSection__background}>
        <Quotes />
      </div>

      <div className={style.testimonialsSection__container}>
        <div className={style.testimonialsSection__title}>
          <Title title="Що наші клієнти кажуть про нас" color="secondary" />
        </div>

        <TestimonialsSlider />
      </div>
    </section>
  );
};
