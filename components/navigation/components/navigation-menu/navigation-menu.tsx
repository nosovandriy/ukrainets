import { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import style from './navigation-menu.module.scss';
import { ModalContext } from '../../../modal-context/modal-provider';
import { PhoneLink } from '@components/phone-link';

import {
  EnglandFlagIcon,
  UkraineFlagIcon,
  UkrainetsLogoIcon,
} from '@components/icons';
import { breakPoints, defaultContacts } from 'consts';
import { formatPhoneNumber } from 'utils/utils';

type Props = {
  toggleMobileMenu?: () => void;
};

export const NavigationMenu: React.FC<Props> = ({ toggleMobileMenu }) => {
  const { setIsOpenModalCallUs } = useContext(ModalContext);

  const ukrainianNumber = formatPhoneNumber(
    defaultContacts.phones.ukraineNumber
  );
  const englandNumber = formatPhoneNumber(
    defaultContacts.phones.firstEnglandNumber
  );

  const handleOpenModalCallUs = () => {
    setIsOpenModalCallUs(true);
    toggleMobileMenu?.();
  }

  return (
    <div className={style.navigationMenu}>
      <MediaQuery minWidth={breakPoints.fromTablet.min}>
        <div className={style.navigationLogo}>
          <UkrainetsLogoIcon />
        </div>
      </MediaQuery>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <UkraineFlagIcon />
        <PhoneLink phoneNumber={ukrainianNumber}>
          {ukrainianNumber}
        </PhoneLink>
      </div>

      <div className={classNames(style.mobileNumber, style.menuItem)}>
        <EnglandFlagIcon />
        <PhoneLink phoneNumber={englandNumber}>
          {englandNumber}
        </PhoneLink>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#about-section">Про нас</Link>
      </div>

      <div className={style.menuItem} onClick={toggleMobileMenu}>
        <Link href="#testimonials-section">Відгуки</Link>
      </div>

      <div
        className={style.menuItem}
        onClick={handleOpenModalCallUs}
      >
        <Link href="#">Контакти</Link>
      </div>
    </div>
  );
};
