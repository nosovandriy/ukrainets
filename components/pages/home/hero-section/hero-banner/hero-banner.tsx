import style from './hero-banner.module.scss';

import Image from 'next/legacy/image';

export const HeroBanner: React.FC = () => {
  return (
    <div className={style.banner}>
      <Image
        className={style.banner1}
        src="/main-banner.png"
        width="270"
        height="380"
        layout='responsive'
        priority
        placeholder='blur'
        blurDataURL={"/main-banner.png"}
        alt="Picture of delivery man with parcels. Ukraine and England flag on background"
      />
    </div>
  );
};
