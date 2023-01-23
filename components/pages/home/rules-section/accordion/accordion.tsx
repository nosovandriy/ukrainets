import { useState } from 'react';

import style from './accordion.module.scss';
import { useRules } from './hook/useRules';
import { AccordionItem } from './accordionItem';
import { ArrowDown } from '../../../../icons/arrow-down';

export const Accordion = () => {
  const { rules } = useRules();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleToggleContent = () => {
    isOpen && setSelectedItem(null);
    setIsOpen(!isOpen);
  }

  const handleToggleListContent = (id: number) => {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
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

        <button className={`${isOpen ? `${style.accordion__arrowUP}` : `${style.accordion__arrowDown}`}`}>
        <ArrowDown />
      </button>
    </div>

      {
    isOpen && (
      <>
        <ul
          className={style.accordion__list}
        >
          {rules.map((rule, index) => (
            <AccordionItem
              key={rule.id}
              rule={rule}
              index={index}
              handleToggleListContent={handleToggleListContent}
              selectedItem={selectedItem}
            />
          ))}
        </ul >
      </>
    )
  }
    </div >
  );
}
