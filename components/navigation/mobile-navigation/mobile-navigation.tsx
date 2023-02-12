import style from './mobile-navigation.module.scss';

import { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useIsMounted } from 'hooks';
import { breakPoints } from 'consts';
import { NavigationBody } from './navigation-body';
import { NavigationHeader } from './navigation-header';

export const MobileNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMounted = useIsMounted();

  function toggleMobileMenu() {
    setIsVisible(!isVisible);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <MediaQuery maxWidth={breakPoints.fromTablet.max}>
      <div className={style.mobileNavigation}>
        <NavigationHeader toggleMobileMenu={toggleMobileMenu} />

        <NavigationBody
          isVisible={isVisible}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </MediaQuery>
  );
};
