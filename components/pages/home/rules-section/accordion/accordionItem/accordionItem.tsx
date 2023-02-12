import style from './accordionItem.module.scss';

import { ArrowButtonAccordion } from '../../arrowButton';
import { Rule } from 'types';

type Props = {
  rule: Rule;
  index: number;
  selectedItem: number | null;
  handleToggleListContent: (id: number) => void;
};

export const BorderRulesAccordionItem: React.FC<Props> = ({
  rule,
  index,
  selectedItem,
  handleToggleListContent,
}) => {
  return (
    <>
      <li className={style.accordionItem}>
        <div
          className={style.accordionItem__title}
          onClick={() => handleToggleListContent(index)}
        >
          <p className={style.accordionItem__title__content}>
            {` ${rule.title} :`}
          </p>
          {selectedItem !== index ? (
            <ArrowButtonAccordion arrowClassName="arrowDown" />
          ) : (
            <ArrowButtonAccordion arrowClassName="arrow90" />
          )}
        </div>
      </li>
      {selectedItem === index && (
        <p className={style.accordionItem__subTitle}>{` ${rule.text} :`}</p>
      )}
    </>
  );
};
