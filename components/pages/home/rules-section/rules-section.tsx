import style from './rules-section.module.scss';

import {ArrowDown} from '../../../icons/arrow-down';

export const RulesSection = () => {
  return (
    <section className={style.rulesSection}>
      <div className={style.rulesSection__container}>
        <h2 className={style.rulesSection__title}>
          Чи можна &quot;це&quot; перевозити?
        </h2>
        <p className={style.rulesSection__subTitle}>
          Перелік речей які заборонені до перевезнення на території ЄС та держ. кордоні України
        </p>

        <div className={style.rulesSection__list}>
          <p className={style.rulesSection__list__content}>
            Перелік заборонених товарів при переміщенні через митний кордон України
            </p>
          <ArrowDown />

        </div>
      </div>
    </section>
  );
}
