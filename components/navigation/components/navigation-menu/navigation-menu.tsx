import style from './navigation-menu.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import {
  EnglandFlagIcon,
  UkraineFlagIcon,
  UkrainetsLogoIcon,
} from '@components/icons';
import { breakPoints, defaultContacts } from 'consts';
import { formatPhoneNumber } from 'utils/utils';

export const NavigationMenu: React.FC<{ toggleMobileMenu?: () => void }> = ({
  toggleMobileMenu,
}) => {

  const ukrainianNumber = formatPhoneNumber(
    defaultContacts.phones.ukraineNumber
  );
  const englandNumber = formatPhoneNumber(
    defaultContacts.phones.firstEnglandNumber
  );

  return (
    <div className={style.navigationMenu}>
      <MediaQuery minWidth={breakPoints.fromTablet.min}>
        <div className={style.navigationLogo}>
          <UkrainetsLogoIcon />
        </div>
      </MediaQuery>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <UkraineFlagIcon />
        <a href={`tel:${ukrainianNumber}`}>{ukrainianNumber}</a>
      </div>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <EnglandFlagIcon />
        <a href={`tel:${englandNumber}`}>{englandNumber}</a>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#about-section">Про нас</Link>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#testimonials-section">Відгуки</Link>
      </div>

      <div
        className={style.menuItem}
      >
        <Link
          onClick={toggleMobileMenu}
          href="#">
          Контакти
        </Link>
      </div>
    </div>
  );
};
