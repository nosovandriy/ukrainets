import Image from 'next/image';

import style from './footer.module.scss';
import { defaultContacts } from '../../consts/default-contacts';
import { useContacts } from './hooks/useContacts';

export const Footer: React.FC = () => {

  const { contacts } = useContacts();

  const formattingPhoneNumber = (contact: string) => {
    if (contact.includes("@")) {
      return contact;
    } else {
      return contact.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    }
  };

  const isEmailAddress = (contact: string) => contact.includes("@")
    ? `mailto:${contact}`
    : `tel:${contact}`;

  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logo}>
          <a
            className={style.footer__logo__image}
            href="#"
          >
            <Image
              src="/logo.svg"
              layout="fill"
              alt="logo of the site"
            />
          </a>
          <h4 className={style.footer__logo__text}>
            © 2019 Ukrainets
            <br></br>
            Перевезення посилок з Лондона
          </h4>

          <a
            className={style.footer__logo__fb}
            href={defaultContacts.facebook}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/facebook-logo.svg"
              layout="fill"
              alt="facebook logo"
            />
          </a>
        </div>
        <div className={style.footer__contacts}>
          <>
            {contacts.map(contact => (
              <div
                className={style.footer__contacts__contact}
                key={contact.id}
              >
                <h4 className={style.footer__contacts__contact__title}>
                  {`${contact.title}:`}
                </h4>
                <a
                  className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
                  href={isEmailAddress(contact.firstInfo)}
                >
                  {formattingPhoneNumber(contact.firstInfo)}
                </a>

                {contact.secondInfo && (
                  <a
                    className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
                    href={isEmailAddress(contact.secondInfo)}
                  >
                    {formattingPhoneNumber(contact.secondInfo)}
                  </a>
                )}
              </div>
            ))}
          </>
        </div>
      </div>
    </footer >
  );
};
