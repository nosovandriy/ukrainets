import style from './btnSlider.module.scss';
import { ArrowLeft, ArrowRight } from '@components/icons';

type Props = {
  nextSlide: () => void,
  prevSlide: () => void,
}

export const BtnSlider: React.FC<Props> = ({ nextSlide, prevSlide }) => {
  return (
    <div className={style.arrows}>
      <button
        className={style.arrows__arrowLeft}
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>

      <button
        className={style.arrows__arrowRight}
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
