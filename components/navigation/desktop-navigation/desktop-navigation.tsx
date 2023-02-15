import style from './desktop-navigation.module.scss';

import MediaQuery from 'react-responsive';

import { useIsMounted } from 'hooks';
import { breakPoints } from 'consts';
import { NavigationMenu } from '../components';
import { useEffect, useState } from 'react';

export const DesktopNavigation: React.FC = () => {

  // const isMounted = useIsMounted();

  // if (!isMounted) {
  //   return null;
  // }

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <MediaQuery minWidth={breakPoints.fromLaptop.min}>
          <div className={style.desktopNavigation}>
            <NavigationMenu />
          </div>
        </MediaQuery>
      )}
    </>
  );
};


// import style from './desktop-navigation.module.scss';

// import { NavigationMenu } from '../components';

// export const DesktopNavigation: React.FC = () => {
//   return (
//     <div className={style.navigation__desktop}>
//       <div className={style.desktopNavigation}>
//         <NavigationMenu />
//       </div>
//     </div>
//   );
// };
