import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

import { useTestimonials } from '../hook/useTestimonials';
import { QuotesSmall } from '@components/icons';

export const TestimonialsSlider = () => {
  const { testimonials } = useTestimonials();

  return (
    <div className="swiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="swiper__wrapper"

        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1366: { slidesPerView: 2 },
          // 1920: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="swiper__testimonials"
          >
            <div className="swiper__testimonial">
              <div className="swiper__testimonial__quotes">
                <QuotesSmall />
              </div>
              <div className="swiper__testimonial__name">
                {testimonial.name}
              </div>
              <div className="swiper__testimonial__city">
                {testimonial.city}
              </div>
              <div className="swiper__testimonial__text">
                {testimonial.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </div>
  );
};
