import style from './footer.module.scss';

import Image from 'next/image';

import { ExternalLink } from '../external-link';
import { formatPhoneNumber } from 'utils/utils';
import { useContacts } from './hooks/useContacts';
import { defaultContacts } from '../../consts/default-contacts';

export const Footer: React.FC = () => {
  const { contacts } = useContacts();

  const hasAtSign = (contact: string) => {
    return contact.includes('@');
  };

  const formattingPhoneNumber = (contact: string) => {
    if (hasAtSign(contact)) {
      return contact;
    } else {
      return formatPhoneNumber(contact);
    }
  };

  const isEmailAddress = (contact: string) =>
    hasAtSign(contact) ? `mailto:${contact}` : `tel:${contact}`;

  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logo}>
          <a className={style.footer__logo__image} href="#">
            <Image src="/logo.svg" fill alt="logo of the site" />
          </a>

          <h4 className={style.footer__logo__text}>
            © 2019 Ukrainets
            <br></br>
            Перевезення посилок з Лондона
          </h4>

          <ExternalLink
            className={style.footer__logo__fb}
            href={defaultContacts.facebook}
          >
            <Image src="/facebook-logo.svg" fill alt="facebook logo" />
          </ExternalLink>
        </div>
        <div className={style.footer__contacts}>
          <>
            {contacts.map((contact) => (
              <div className={style.footer__contacts__contact} key={contact.id}>
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
    </footer>
  );
};
