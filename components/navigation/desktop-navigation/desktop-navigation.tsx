import style from './desktop-navigation.module.scss';

import MediaQuery from 'react-responsive';

import { useIsMounted } from 'hooks';
import { breakPoints } from 'consts';
import { NavigationMenu } from '../components';

export const DesktopNavigation: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <MediaQuery minWidth={breakPoints.fromTablet}>
      <div className={style.desktopNavigation}>
        <NavigationMenu />
      </div>
    </MediaQuery>
  );
};
