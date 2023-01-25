import style from './arrowButton.module.scss';
import { ArrowDown } from '@components/icons';

export const ArrowButtonAccordion: React.FC<{
  arrowClassName: string,
}> = ({
  arrowClassName,
}) => {
    return (
      <button className={style[arrowClassName]} >
        <ArrowDown />
      </button>
    );
  }
