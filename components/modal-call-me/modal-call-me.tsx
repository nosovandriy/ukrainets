import { useState, useRef, useContext, RefObject } from 'react';
import Image from 'next/legacy/image';
import { PhoneNumber } from './phone-number';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import style from './modal-call-me.module.scss';
import { fontService } from '@services/font-service';
import { CrossIcon } from '@components/icons';
import { breakPoints } from 'consts';
import { useEmailSent } from '@hooks/useEmailSent';
import { ModalContext } from '@components/modal-context/modal-provider';
import { EmailNotificationStep } from 'types/EmailNotificationStep';
import { ModalOverlay } from '@components/modal-overlay/modal-overlay';

export const CallMeModal = () => {
  const [clientName, setClientName] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');

  const {
    isOpenModalCallMe,
    setIsOpenModalCallMe,
    sendClientData,
    setSendClientData,
  } = useContext(ModalContext);

  const formRef = useRef<HTMLFormElement | string>('');
  const { sendMail } = useEmailSent();

  const isActiveCallMeButton = clientName && clientPhoneNumber.length === 12;

  const sendFormInformationToEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isActiveCallMeButton) {
      return;
    };

    setSendClientData(EmailNotificationStep.send);
    sendMail(formRef);
  };

  return (
    <ModalOverlay
      isOpenModal={isOpenModalCallMe}
      setIsOpenModal={setIsOpenModalCallMe}
    >
      {isOpenModalCallMe && (
        <div className={style.modalWrapper}>
          <div
            className={style.closeMenuIcon}
            onClick={() => setIsOpenModalCallMe(false)}
          >
            <CrossIcon />
          </div>
          {!sendClientData ? (
            <>
              <div className={style.textContent}>
                <MediaQuery minWidth={breakPoints.fromLaptop.min}>
                  <div
                    className={style.textContent__image}
                  >
                    <Image
                      src="/online-shopping.webp"
                      layout="fill"
                      alt="Online shopping"
                    />
                  </div>
                </MediaQuery>

                <h2
                  className={classNames(
                    fontService.getMachinaFont().className,
                    style.textContent__title,
                  )}
                >
                  Хочете замовити перевезення або маєте питання?
                </h2>
                <p className={style.textContent__subTitle}>
                  Залиште свій номер телефону та ми передзвонимо Вам впродовж півгодини!
                </p>
              </div>

              <form
                ref={formRef as RefObject<HTMLFormElement>}
                className={style.form}
                onSubmit={sendFormInformationToEmail}
              >
                <input
                  type="text"
                  name="clientName"
                  placeholder="Ваше ім’я"
                  value={clientName}
                  className={classNames(style.form__name, style.form__styles)}
                  onChange={(event) => setClientName(event.target.value)}
                />

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Номер телефону"
                  value={clientPhoneNumber}
                  className={classNames(style.form__phone, style.form__styles, style.form__hide)}
                  onChange={(event) => setClientPhoneNumber(event.target.value)}
                />

                <div>
                  <PhoneNumber
                    clientPhoneNumber={clientPhoneNumber}
                    setClientPhoneNumber={setClientPhoneNumber}
                  />
                </div>

                <button
                  type='submit'
                  className={classNames(style.form__callMe, style.form__styles,
                    { [`${style.form__callMe__active}`]: isActiveCallMeButton },
                  )}
                >
                  Передзвоніть мені
                </button>
              </form>
            </>
          ) : (
            <div className={style.checked}>
              <h2
                className={classNames(
                  fontService.getMachinaFont().className,
                  style.textContent__title,
                )}
              >
                Очікуйте на дзвінок
              </h2>
              <div
                className={style.checked__image}
                onClick={() => setIsOpenModalCallMe(false)}
              >
                <Image
                  src="/check.webp"
                  layout="fill"
                  alt="Check Picture"
                />
              </div>
            </div>
          )}
        </div>
      )
      }
    </ModalOverlay >
  );
}
