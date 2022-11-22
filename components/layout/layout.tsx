import style from './layout.module.scss';

import { DesktopNavigation, MobileNavigation } from '../navigation';
import { Footer } from '../footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <MobileNavigation />

      <div className={style.layoutSection}>
        <DesktopNavigation />

        {children}

        {/* <Footer /> */}
      </div>
    </>
  );
};
