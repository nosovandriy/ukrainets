import style from './hero-banner.module.scss';

import Image from 'next/image';

export const HeroBanner: React.FC = () => {
  return (
    <div className={style.banner}>
      <Image
        className={style.banner1}
        src="/main-banner.webp"
        fill
        sizes="100%"
        // priority
        // placeholder="blur"
        // blurDataURL={'/main-banner.webp'}
        alt="Picture of delivery man with parcels. Ukraine and England flag on background"
      />
    </div>
  );
};
