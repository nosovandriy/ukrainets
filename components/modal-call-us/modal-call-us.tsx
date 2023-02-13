import { useContext } from 'react';
import Image from 'next/legacy/image';
import classNames from 'classnames';

import style from './modal-call-us.module.scss';
import { CrossIcon } from '@components/icons';
import { fontService } from '@services/font-service';
import { useContacts } from './hooks/useContacts';
import { ContentLink } from './content-link';
import { ModalContext } from '@components/modal-context/modal-provider';
import { ModalOverlay } from '@components/modal-overlay/modal-overlay';

export const CallUsModal = () => {
  const { contacts } = useContacts();
  const { isOpenModalCallUs, setIsOpenModalCallUs } = useContext(ModalContext);

  return (
    <ModalOverlay
      isOpenModal={isOpenModalCallUs}
      setIsOpenModal={setIsOpenModalCallUs}
    >
      {isOpenModalCallUs && (
        <div className={style.modalWrapper}>
          <div
            className={style.closeMenuIcon}
            onClick={() => setIsOpenModalCallUs(false)}
          >
            <CrossIcon />
          </div>
          <div className={style.image}>
            <Image
              src="/call-me-hand.webp"
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
                    />

                    {contact.secondInfo && (
                      <ContentLink
                        contactInfo={contact.secondInfo}
                      />
                    )}
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      )}
    </ModalOverlay>
  );
}
