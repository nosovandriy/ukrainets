import style from './schedule-title.module.scss';

import React from 'react';

export const ScheduleTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.title}>
      <h2>{title}</h2>
    </div>
  );
};
