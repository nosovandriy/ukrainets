import { useState, useContext, useEffect } from 'react';
import Image from 'next/legacy/image';
import classNames from 'classnames';

import style from './modal-call-us.module.scss';
import { CrossIcon } from '@components/icons';
import { fontService } from '@services/font-service';
import { useContacts } from './hooks/useContacts';
import { ContentLink } from './content-link';
import { ModalContext } from '../modal-context/modal-context';

export const CallUsModal = () => {
  const [isCopyPhoneNumber, setIsCopyPhoneNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const { contacts } = useContacts();

  const { isOpenModalCallUs, setIsOpenModalCallUs } = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      if (isCopyPhoneNumber) {
        setPhoneNumber('');
        setIsCopyPhoneNumber(false);
      };
    }, 1500);
  }, [isCopyPhoneNumber])

  return (
    <>
      {isOpenModalCallUs && (
        <div className={style.overlay}>
          <div className={style.modalWrapper}>
            <div
              className={style.closeMenuIcon}
              onClick={() => setIsOpenModalCallUs(false)}
            >
              <CrossIcon />
            </div>
            <div className={style.image}>
              <Image
                src="/call-me-hand.png"
                layout="fill"
                alt="Call me hand"
              />
            </div>
            <div className={style.textContent}>
              <h2
                className={classNames(
                  fontService.getMachinaFont().className,
                  style.textContent__title,
                )}
              >
                Зателефонуйте нам!
              </h2>
              <div className={style.contacts}>
                <>
                  {contacts.map((contact) => (
                    <div
                      className={style.contacts__contact}
                      key={contact.id}
                    >

                      <h4 className={style.contacts__contact__title}>
                        {`${contact.title}:`}
                      </h4>

                      <ContentLink
                        contactInfo={contact.firstInfo}
                        isCopyPhoneNumber={isCopyPhoneNumber}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        setIsCopyPhoneNumber={setIsCopyPhoneNumber}
                      />

                      {contact.secondInfo && (
                        <ContentLink
                          contactInfo={contact.secondInfo}
                          isCopyPhoneNumber={isCopyPhoneNumber}
                          phoneNumber={phoneNumber}
                          setPhoneNumber={setPhoneNumber}
                          setIsCopyPhoneNumber={setIsCopyPhoneNumber}
                        />
                      )}
                    </div>
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
