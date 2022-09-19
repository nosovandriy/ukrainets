import style from './mobile-navigation.module.scss';

import { useState } from 'react';
import MediaQuery from 'react-responsive';

import { breakPoints } from 'consts';
import { NavigationBody } from './navigation-body';
import { NavigationHeader } from './navigation-header';

export const MobileNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMobileMenu() {
    setIsVisible(!isVisible);
  }

  return (
    <MediaQuery maxWidth={breakPoints.fromTablet}>
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
