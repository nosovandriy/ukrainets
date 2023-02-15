import style from './desktop-navigation.module.scss';

import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';
import { NavigationMenu } from '../components';
import { useEffect, useState } from 'react';

export const DesktopNavigation: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <MediaQuery minWidth={breakPoints.fromLaptop.min}>
          <div className={style.desktopNavigation}>
            <NavigationMenu />
          </div>
        </MediaQuery>
      )}
    </>
  );
};
