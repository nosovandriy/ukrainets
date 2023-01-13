import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import { useTestimonials } from '../hook';

export const TestimonialsCarousel: React.FC = () => {

  const { testimonials } = useTestimonials(); 
  return (
    <Carousel
      autoPlay
    >
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

    </Carousel>
  );

};