import style from './desktop-navigation.module.scss';

import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';
import { NavigationMenu } from '../components';

export const DesktopNavigation: React.FC = () => {
  return (
    <MediaQuery minWidth={breakPoints.fromTablet}>
      <div className={style.desktopNavigation}>
        <NavigationMenu />
      </div>
    </MediaQuery>
  );
};
