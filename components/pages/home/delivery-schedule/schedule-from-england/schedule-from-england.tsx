import style from './schedule-from-england.module.scss';

import Image from 'next/legacy/image';

import { useIsMounted } from 'hooks';
import { Title } from '../../../../title';
import { Calendar, ScheduleDetailsContainer } from '../components';

export const ScheduleFromEngland: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section id={'schedule-section'} className={style.scheduleFromEngland}>
      <Title title="Розклад збору вантажів в Лондоні" />

      <div className={style.scheduleWrapper}>
        <Calendar showIcon={false} />

        <ScheduleDetailsContainer>
          <span className={style.calendarIcon}>
            <Image
              priority
              width="100"
              height="110"
              src="/mark.png"
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
