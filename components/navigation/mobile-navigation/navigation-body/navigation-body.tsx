import style from './navigation-body.module.scss';

import { CrossIcon } from '@components/icons';
import { NavigationMenu } from '../../components';

type Props = {
  isVisible: boolean;
  toggleMobileMenu: () => void;
};

export const NavigationBody: React.FC<Props> = ({
  isVisible,
  toggleMobileMenu,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={style.navigationBody}>
      <NavigationMenu
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className={style.closeMenuIcon} onClick={toggleMobileMenu}>
        <CrossIcon />
      </div>
    </div>
  );
};
