import style from './schedule-from-england.module.scss';

import Image from 'next/legacy/image';

import { Title } from '../../../../title';
import { Calendar, ScheduleDetailsContainer } from '../components';

export const ScheduleFromEngland: React.FC = () => {
  return (
    <section className={style.scheduleFromEngland}>
      <div className={style.scheduleFromEngland__title}>
        <Title title="Розклад збору вантажів в Лондоні" />
      </div>

      <div className={style.scheduleWrapper}>
        <Calendar showIcon={false} />

        <ScheduleDetailsContainer>
          <span className={style.calendarIcon}>
            <Image
              priority
              width="100"
              height="110"
              src="/mark.webp"
              alt="Mark icon"
            />
          </span>

          <div>
            Збір вантажів відбувається з четверга по неділю включно. Водії
            їздять по різним районам Лондона, і за кожною адресою забирають
            вантаж.
          </div>
          <div>
            У Тернопільську, Івано-Франківську та Львівську області доставляємо
            своїми курєрами.
          </div>
          <div>
            У Східну, Центральну та Південну частину України відправляємо Новою
            Поштою.
          </div>
        </ScheduleDetailsContainer>
      </div>
    </section>
  );
};
