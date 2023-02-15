import style from './mobile-navigation.module.scss';

import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';
import { NavigationBody } from './navigation-body';
import { NavigationHeader } from './navigation-header';
import { useEffect, useState } from 'react';

export const MobileNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  function toggleMobileMenu() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <MediaQuery maxWidth={breakPoints.fromTablet.max}>
          <div className={style.mobileNavigation}>
            <NavigationHeader toggleMobileMenu={toggleMobileMenu} />

            <NavigationBody
              isVisible={isVisible}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </MediaQuery>
      )}
    </>
  );
};
