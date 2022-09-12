import style from './hero-banner.module.scss';

import Image from 'next/image';

export const HeroBanner: React.FC = () => {
  return (
    <div className={style.banner}>
      <Image
        src="/main-banner.png"
        width="270"
        height="380"
        layout="responsive"
        priority
        alt="Picture of delivery man with parcels. Ukraine and England flag on background"
      />
    </div>
  );
};
