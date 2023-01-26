import style from './content-box.module.scss';

import classNames from 'classnames';

import { fontService } from '@services/font-service';

export const ContentBox: React.FC<{ title: string; text: string; count: number }> = ({
  title,
  text,
  count
}) => {
  return (
    <div className={style.contentBox}>
      <div
            className={classNames(
              fontService.getMachinaFont().className,
              style.boxCount,
              )}
       >{count}
       </div>
      <div
      className={classNames(
        fontService.getMachinaFont().className,
        style.boxTitle,
        )}
      >{title}
      </div>
      <div className={style.boxText}>{text}</div>
    </div>
  );
};
