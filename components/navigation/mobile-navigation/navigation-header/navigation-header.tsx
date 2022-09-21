import style from './navigation-header.module.scss';

import { MobileMenuIcon, UkrainetsLogoIcon } from '@components/icons';

export const NavigationHeader: React.FC<{
  toggleMobileMenu: () => void;
}> = ({ toggleMobileMenu }) => {
  return (
    <div className={style.navigationHeader} onClick={toggleMobileMenu}>
      <MobileMenuIcon />

      <UkrainetsLogoIcon />
    </div>
  );
};
