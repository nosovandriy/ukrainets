import style from './delivery-steps.module.scss';

import Image from 'next/legacy/image';

import { ContentBox } from './content-box';
import { Title } from '@components/title';
import { UAlineFlag } from '@components/icons';

export const DeliverySteps: React.FC = () => {
  return (
    <section className={style.deliverySteps}>
      <div className={style.deliverySteps__container}>
        <div className={style.deliverySteps__tridentImage}>
          <Image
            priority
            layout="fill"
            src="/trident.png"
            alt="Trident Ukraine"
          />
        </div>

        <div className={style.deliverySteps__title}>
          <Title title="Хочу відправити вантаж в Україну" color="secondary" />
        </div>

        <div className={style.deliverySteps__boxesWrapper}>
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
            text={'Отримавши Ваше місценаходження, ми одразу приїдем та заберем пакунок'}
          />
        </div>

        <div className={style.flagImage}>
          <UAlineFlag />
        </div>
      </div>
    </section>
  );
};
