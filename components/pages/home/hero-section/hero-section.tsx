import { useState } from 'react';
import Link from 'next/link';
import MediaQuery from 'react-responsive';

import style from './hero-section.module.scss';
import { breakPoints } from 'consts';
import { Button } from '../../../button';
import { HeroBanner } from './hero-banner';
import { useIsMounted } from 'hooks';
import { fontService } from '@services/font-service';
import { CallMeModal } from './modal-call-me';
import { EmailNotificationStep } from '../../../../types/EmailNotificationStep';

export const HeroSection: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [sendClientData, setSendClientData] = useState<EmailNotificationStep>(EmailNotificationStep.initial);

  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
    setSendClientData(EmailNotificationStep.initial);
  }

  return (
    <main className={style.heroSection}>
      <div className={style.details}>
        <div className={style.title}>
          <h1 className={fontService.getMachinaFont().className}>
            Міжнародні перевезення посилок з Лондона в Україну
          </h1>
        </div>

        <MediaQuery maxWidth={breakPoints.fromMobile.max}>
          <HeroBanner />
        </MediaQuery>

        <div>
          <p className={style.text}>Отримай посилку вже наступного тижня!</p>
        </div>

        <div className={style.buttons}>
          <Button
            label="Передзвоніть мені"
            onClick={handleOpenModal}
          />
          <CallMeModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            sendClientData={sendClientData}
            setSendClientData={setSendClientData}
          />
          <Link className={style.scheduleButton} href="#schedule-section">
            Дивитись розклад
          </Link>
        </div>
      </div >

      <MediaQuery minWidth={breakPoints.fromTablet.min}>
        <HeroBanner />
      </MediaQuery>
    </main >
  );
};
