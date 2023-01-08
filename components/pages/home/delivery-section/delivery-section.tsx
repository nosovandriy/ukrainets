import style from './delivery-section.module.scss';

import Image from 'next/image';

import { Title } from '../../../title';

export const DeliverySection: React.FC = () => {
  return (
    <section className={style.deliverySection}>
      <Title title="Замовляйте в Україні з доставкою у Лондон" />
      <p className={style.deliverySection__subTitle}>
        Знаходитесь у Лондоні та хочете зробити замовлення у вашому улюбленому
        українському магазині? Ми Вам з цим допоможемо!
      </p>

      <div className={style.deliverySection__shoppingImage}>
        <Image
          src="/shop-in-ukraine.png"
          layout="fill"
          alt="Picture point of the GPS"
        />
      </div>

      <div className={style.deliverySection__aboutDelivery}>
        <p className={style.deliverySection__aboutDelivery__info}>
          Замовляйте доставку Новою Поштою з українських магазинів на нашу
          адресу, та ми доставимо Ваше замовлення в Лондон, прямісенько до Вас
          додому.
        </p>

        <p className={style.deliverySection__aboutDelivery__address}>
          Наша адреса: м. Тернопіль, вул. Тернопільська, буд. 00, оф. 0{' '}
        </p>
      </div>
    </section>
  );
};
