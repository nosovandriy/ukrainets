import style from './testimonials-section.module.scss';
import { Quotes } from '@components/icons';
import { TestimonialsSlider } from './carousel';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className={style.testimonialsSection}>
      <div className={style.testimonialsSection__background}>
        <Quotes />
      </div>

      <div className={style.testimonialsSection__container}>
        <h2 className={style.testimonialsSection__title}>
          Що наші клієнти кажуть про нас
        </h2>

        <TestimonialsSlider />
      </div>
    </section>
  );
};
