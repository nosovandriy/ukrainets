import styles from '../../../../styles/Home.module.css';

import classNames from 'classnames';
import Image from 'next/image';

import boxIconImage from '../../../../public/box-icon-2.svg';

export const Company = () => {
  return (
    <div className={styles.company}>
      <Image src={boxIconImage} width="100" height="100" />

      <div className={styles.brandContainer}>
        <span className={styles.logo}>British Post</span>
        <span className={classNames(styles.logoTitle, 'text-stone-700')}>
          Перевезення посилок з Лондона
        </span>
      </div>
    </div>
  );
};
