import style from './calendar.module.scss';

import Image from 'next/image';

import { useDateDetails } from 'hooks';

export const Calendar: React.FC<{ showIcon?: boolean }> = ({
  showIcon = true,
}) => {
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
          {/* TODO: change icon size on desktop */}
          <Image
            priority
            width="100"
            height="110"
            src="/calendar.png"
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
          <div key={indx} className={style.dayElement}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
