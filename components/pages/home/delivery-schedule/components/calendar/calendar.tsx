import style from './calendar.module.scss';

import Image from 'next/legacy/image';

import { useDateDetails } from 'hooks';
import classNames from 'classnames';

export const Calendar: React.FC<{
  showIcon?: boolean;
  isEngland?: boolean;
}> = ({ showIcon = true, isEngland = true }) => {
  const { currentYear, weekDays } = useDateDetails();

  const emptyDivList = createEmptyDivList(28);

  function createEmptyDivList(listCount: number): string[] {
    const arrayList = [];

    for (let i = 0; i < listCount; i++) {
      arrayList.push('');
    }

    return arrayList;
  }

  return (
    <div className={style.calendar}>
      {showIcon && (
        <div className={style.calendarIcon}>
          <Image
            priority
            width="100"
            height="110"
            src="/calendar.webp"
            alt="Calendar icon"
          />
        </div>
      )}

      <div className={style.calendarYear}>{currentYear}</div>

      <div className={style.calendarWeek}>
        {weekDays.map((day) => (
          <div key={day} className={style.dayTitle}>
            {day}
          </div>
        ))}

        {emptyDivList.map((item, indx) => (
          <div
            key={indx}
            className={classNames(style.dayElement, {
              [style.england]: isEngland,
              [style.ukraine]: !isEngland,
            })}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
