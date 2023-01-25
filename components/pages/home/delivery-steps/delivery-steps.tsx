import style from './delivery-steps.module.scss';

import Image from 'next/image';

import { useIsMounted } from 'hooks';
import { ContentBox } from './content-box';
import { Title } from '@components/title';

export const DeliverySteps: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section className={style.deliverySteps}>
      <div className={style.tridentImage}>
        <Image
          priority
          width="206"
          height="206"
          src="/trident.png"
          alt="Calendar icon"
        />
      </div>

      <div className={style.title}>
        <Title title="Хочу відправити вантаж в Україну" color="secondary" />
      </div>

      <div className={style.boxesWrapper}>
        <ContentBox
          count={1}
          title={'Запакуйте'}
          text={'Використайте картонну коробку'}
        />

        <ContentBox
          count={2}
          title={'Напишіть дані отримувача'}
          text={"Вкажіть повне ім'я особи, номер телефону та адресу"}
        />

        <ContentBox
          count={3}
          title={'Зателефонуйте до нас'}
          text={
            'Отримавши Ваше місценаходження, ми одразу приїдем та заберем пакунок'
          }
        />
      </div>
    </section>
  );
};
