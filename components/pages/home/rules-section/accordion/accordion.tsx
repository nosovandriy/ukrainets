import { useState, useEffect } from 'react';
import style from './accordion.module.scss';

import { ArrowDown } from '../../../../icons/arrow-down';
import { useRules } from './hook/useRules';
import { AccordionItem } from './accordionItem';

export const Accordion = () => {
  const { rules } = useRules();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleContent = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.accordion}>
      <div
        className={style.accordion__preview}
        onClick={handleToggleContent}
      >
        <p className={style.accordion__preview__title}>
          Перелік заборонених товарів при переміщенні через митний кордон України
        </p>

        <button className={`${isOpen && style.accordion__arrowUP}`}>
          <ArrowDown />
        </button>
      </div>

      {isOpen && (
        <>
          <ul
            className={style.accordion__list}
          >
            {rules.map((rule, index) => (
              <AccordionItem key={rule.id} rule={rule} index={index} />
            ))}
          </ul >
        </>
      )}

    </div >
  );
}
