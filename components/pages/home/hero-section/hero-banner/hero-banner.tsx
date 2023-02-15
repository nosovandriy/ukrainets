import Image from 'next/image';

import style from './hero-banner.module.scss';

export const HeroBanner: React.FC = () => {
  return (
    <div className={style.banner}>
      <Image
        className={style.banner1}
        src="/main-banner.webp"
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL={'/main-banner.webp'}
        alt="Picture of delivery man with parcels. Ukraine and England flag on background"
      />
    </div>
  );
};
