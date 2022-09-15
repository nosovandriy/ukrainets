import style from './navigation.module.scss';

import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';

export const Navigation: React.FC = () => {
  return (
    <MediaQuery minWidth={breakPoints.fromTablet}>
      <div className={style.navigationMenu}>
        <h2>Desktop view</h2>
      </div>
    </MediaQuery>
  );
};
