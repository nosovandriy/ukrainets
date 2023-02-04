import { useState, useRef, useEffect, useCallback, FC, RefObject } from 'react';
import Image from 'next/legacy/image';
import { PhoneNumber } from './phone-number';
import { animated, useSpring } from '@react-spring/web'
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import style from './modal-call-me.module.scss';
import { fontService } from '@services/font-service';
import { CrossIcon } from '@components/icons';
import { breakPoints } from 'consts';
import { useEmailSent } from '../../../../../hooks/useEmailSent';
import { EmailNotificationStep } from '../../../../../types/EmailNotificationStep';

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  sendClientData: EmailNotificationStep;
  setSendClientData: (sendStep: EmailNotificationStep) => void;
}

export const CallMeModal: FC<Props> = ({
  isOpenModal,
  setIsOpenModal,
  sendClientData,
  setSendClientData,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');

  const formRef = useRef<HTMLFormElement | string>('');
  const { sendMail } = useEmailSent();

  const modalRef = useRef<HTMLInputElement>(null);
  const activeField = useRef<HTMLInputElement>(null);
  const isActiveCallMeButton = clientName && clientPhoneNumber.length === 12;
  const escapeKey = 'Escape';

  useEffect(() => {
    if (activeField.current) {
      activeField.current.focus();
    }
  }, [sendClientData]);

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === event.target) {
      setIsOpenModal(!isOpenModal);
    }
  }

  const keyPress = useCallback(
    (event: any) => {
      if (event.key === escapeKey && isOpenModal) {
        setIsOpenModal(false);
      }
    }, [setIsOpenModal, isOpenModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },
    [keyPress]
  );

  const sendFormInformationToEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isActiveCallMeButton) {
      return;
    };

    setSendClientData(EmailNotificationStep.send);
    sendMail(formRef);
  };

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: isOpenModal ? 1 : 0,
    transform: isOpenModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {isOpenModal && (
        <div
          ref={modalRef}
          onClick={(event) => closeModal(event)}
          className={style.overlay}
        >
          <animated.div style={animation}>
            <div className={style.modalWrapper}>
              <div
                className={style.closeMenuIcon}
                onClick={() => setIsOpenModal(false)}
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
                          src="/online-shopping.png"
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
                    onClick={() => setIsOpenModal(false)}
                  >
                    <Image
                      src="/check.png"
                      layout="fill"
                      alt="Check Picture"
                    />
                  </div>
                </div>
              )}
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
}
