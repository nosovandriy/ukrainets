import style from './schedule-from-ukraine.module.scss';

import { useIsMounted } from 'hooks';
import {
  Calendar,
  ScheduleDetailsContainer,
  ScheduleTitle,
} from '../components';

export const ScheduleFromUkraine: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section className={style.scheduleFromUkraine}>
      <ScheduleTitle title="Розклад збору вантажів в Україні" />

      <div className={style.scheduleWrapper}>
        <Calendar />

        <ScheduleDetailsContainer>
          <div>
            З України виїзд кожного понеділка. Ви можете відправити вантаж в
            любий момент на наш склад в Тернопіль. Також, можна особисто
            підвезти на склад.
          </div>
          <div>
            Забираємо вантажі та посилки за Вашою адресою в західні частині
            України.
          </div>
          <div>
            Отримуємо Ваші вантажі за допомогою Нової Пошти, якщо Ви знаходитесь
            в іншій частині Украіни.
          </div>
        </ScheduleDetailsContainer>
      </div>
    </section>
  );
};
