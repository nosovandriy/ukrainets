import style from './layout.module.scss';

import { Footer } from '../footer';
import { MobileNavigation, Navigation } from '../navigation';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <MobileNavigation />

      <div className={style.layoutSection}>
        <Navigation />

        {children}

        <Footer />
      </div>
    </>
  );
};
