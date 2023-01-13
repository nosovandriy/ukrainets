import Image from 'next/image';
import style from './testimonials-section.module.scss';
import { Quotes, QuotesSmall, ArrowLeft, ArrowRight } from '@components/icons';
import { TestimonialsCarousel } from './carousel/carousel';

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

        <div className={style.testimonialsSection__testimonials}>
          <div className={`${style.testimonialsSection__testimonials__testimonial} ${style.testimonial}`}>
            <div className={style.testimonial__quotes}>
              <QuotesSmall />
            </div>
            <div className={style.testimonial__name}>
              Галина Романівна
            </div>
            <div className={style.testimonial__city}>
              Київ
            </div>
            <div className={style.testimonial__text}>
              Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.
            </div>
          </div>
          <div className={`${style.testimonialsSection__testimonials__testimonial} ${style.testimonial}`}>
            <div className={style.testimonial__quotes}>
              <QuotesSmall />
            </div>
            <div className={style.testimonial__name}>
              Галина Романівна
            </div>
            <div className={style.testimonial__city}>
              Київ
            </div>
            <div className={style.testimonial__text}>
              Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.
            </div>
          </div>
          <div className={`${style.testimonialsSection__testimonials__testimonial} ${style.testimonial}`}>
            <div className={style.testimonial__quotes}>
              <QuotesSmall />
            </div>
            <div className={style.testimonial__name}>
              Галина Романівна
            </div>
            <div className={style.testimonial__city}>
              Київ
            </div>
            <div className={style.testimonial__text}>
              Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.
            </div>
          </div>
        </div>

        <TestimonialsCarousel />
        
        <div className={style.testimonialsSection__arrows}>
          <div className={style.testimonialsSection__arrow}>
            <ArrowLeft />
          </div>
          <div className={style.testimonialsSection__arrow}>
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};
