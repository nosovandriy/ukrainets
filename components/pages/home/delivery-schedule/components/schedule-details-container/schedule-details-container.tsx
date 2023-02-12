import style from './schedule-details-container.module.scss';

import React from 'react';

export const ScheduleDetailsContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className={style.scheduleDetails}>{children}</div>;
};
