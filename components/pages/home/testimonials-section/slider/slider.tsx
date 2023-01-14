import { useState } from "react";

import style from './slider.module.scss';
import { QuotesSmall } from '@components/icons';
import { useTestimonials } from '../hook/useTestimonials';
import { BtnSlider } from "./btnSlider";

export const Slider = () => {
  const { testimonials } = useTestimonials();
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    (slideIndex !== testimonials.length) ? setSlideIndex(slideIndex + 1) : setSlideIndex(1);
  };

  const prevSlide = () => {
    (slideIndex !== 1) ? setSlideIndex(slideIndex - 1) : setSlideIndex(testimonials.length);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${style.testimonials__testimonial} ${(slideIndex !== index + 1) && `${style.testimonials__testimonial__hide}`}`}
          >
            <div className={style.testimonials__testimonial__quotes}>
              <QuotesSmall />
            </div>
            <div className={style.testimonials__testimonial__name}>
              {testimonial.name}
            </div>
            <div className={style.testimonials__testimonial__city}>
              {testimonial.city}
            </div>
            <div className={style.testimonials__testimonial__text}>
              {testimonial.text}
            </div>
          </div>
        ))}
      </div>

      <BtnSlider nextSlide={nextSlide} prevSlide={prevSlide} />
    </div >
  );
};
