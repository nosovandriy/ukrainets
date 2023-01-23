import style from './title.module.scss';

import React from 'react';

import { fontService } from '@services/font-service';

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.title}>
      <h2 className={fontService.getMachinaFont().className}>{title}</h2>
    </div>
  );
};
