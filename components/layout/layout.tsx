import style from './layout.module.scss';

import { Footer } from '../footer';
import { Navigation } from '../navigation';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={style.layoutSection}>
      <Navigation />

      {children}

      <Footer />
    </div>
  );
};
