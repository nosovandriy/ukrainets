import style from './accordionItem.module.scss';
import { ArrowDown } from '../../../../icons/arrow-down';
import { Rule } from 'types/Rule';

type Props = {
  rule: Rule;
  index: number;
  selectedItem: number | null;
  handleToggleListContent: (id: number) => void;
}

export const AccordionItem: React.FC<Props> = ({
  rule,
  index,
  selectedItem,
  handleToggleListContent
}) => {
  return (
    <>
      <li className={style.accordionItem}>
        <div
          className={style.accordionItem__title}
          onClick={() => handleToggleListContent(index)}
        >
          <p>
            {`● ${rule.title} :`}
          </p>
            <button className={`${selectedItem === index && `${style.accordionItem__arrowUP}`}`}>
            <ArrowDown />
          </button>

        </div>
      </li>
      {selectedItem === index && (
        <p className={style.accordionItem__subTitle}>
          {rule.text}
        </p>
      )}
    </>
  );
}
