import style from './mobile-navigation.module.scss';

import MediaQuery from 'react-responsive';

import {
  EnglandFlagIcon,
  MobileMenuIcon,
  UkraineFlagIcon,
  UkrainetsLogoIcon,
} from '@components/icons';
import { breakPoints } from 'consts';

export const MobileNavigation: React.FC = () => {
  return (
    <MediaQuery maxWidth={breakPoints.fromTablet}>
      <div className={style.mobileNavigation}>
        <span className={style.navigationIcon}>
          <MobileMenuIcon />
        </span>
        {/* <EnglandFlagIcon />
        <UkraineFlagIcon /> */}
        <UkrainetsLogoIcon />
      </div>
    </MediaQuery>
  );
};
