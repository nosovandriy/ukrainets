import { useState, useEffect } from 'react';
import style from './accordionItem.module.scss';

import { ArrowDown } from '../../../../icons/arrow-down';
import { Rule } from 'types/Rule';

type Props = {
  rule: Rule;
  index: number;
}

export const AccordionItem: React.FC<Props> = ({ rule, index }) => {

  // const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleToggleContent = (id: number) => {
    if (selectedItem === id) {
      return setSelectedItem(-1);
    }
    
    setSelectedItem(id);
  }

  console.log('selectedItem', selectedItem);

  return (
    <>
      <li className={style.accordionItem}>
        <div
          className={style.accordionItem__title}
          onClick={() => handleToggleContent(index)}
        >
          <p>
            {`* ${rule.title}:`}
          </p>
          <button className={`${selectedItem !== index ? style.accordionItem__arrowDown : style.accordionItem__arrowUP}`}>
            <ArrowDown />
          </button>
        </div>
          <p className={`${selectedItem === index ? style.accordionItem__subTitle : style.accordionItem__subTitleHide}`}>
            {rule.text}
          </p>
      </li>
    </>
  );
}
