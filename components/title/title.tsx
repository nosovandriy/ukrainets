import style from './title.module.scss';

import React from 'react';

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.title}>
      <h2>{title}</h2>
    </div>
  );
};
