import style from './title.module.scss';

import React from 'react';
import classNames from 'classnames';

import { fontService } from '@services/font-service';

type TitleColor = 'primary' | 'secondary';

export const Title: React.FC<{ title: string; color?: TitleColor }> = ({
  title,
  color = 'primary',
}) => {
  return (
      <h2
        className={classNames(
          style.default,
          style[color],
          fontService.getMachinaFont().className,
        )}
      >
        {title}
      </h2>
  );
};
