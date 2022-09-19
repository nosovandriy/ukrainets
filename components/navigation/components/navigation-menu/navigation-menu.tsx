import style from './navigation-menu.module.scss';

import Link from 'next/link';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import {
  EnglandFlagIcon,
  UkraineFlagIcon,
  UkrainetsLogoIcon,
} from '@components/icons';
import { breakPoints } from 'consts';

export const NavigationMenu: React.FC<{ toggleMobileMenu?: () => void }> = ({
  toggleMobileMenu,
}) => {
  return (
    <div className={style.navigationMenu}>
      <MediaQuery minWidth={breakPoints.fromTablet}>
        <div className={style.navigationLogo}>
          <UkrainetsLogoIcon />
        </div>
      </MediaQuery>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <UkraineFlagIcon />
        <a href="tel:+380 67 714 4424">+380 67 714 4424</a>
      </div>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <EnglandFlagIcon />
        <a href="tel:+44 77 382 044 57">+44 77 382 044 57</a>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#about-section">Про нас</Link>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#testimonials-section">Відгуки</Link>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#contacts-section">Контакти</Link>
      </div>
    </div>
  );
};
