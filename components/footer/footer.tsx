import Image from 'next/image';

import style from './footer.module.scss';

const contacts = [
  {
    "id": 1,
    "title": "Англія",
    "firstInfo": "+447738204457",
    "secondInfo": "+447982651844",
  },
  {
    "id": 2,
    "title": "Україна",
    "firstInfo": "+380677144424",
    "secondInfo": "",
  },
  {
    "id": 3,
    "title": "E-mail",
    "firstInfo": "contact@britishpost.com.ua",
    "secondInfo": "",
  },
];

export const Footer: React.FC = () => {
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
            href="https://www.facebook.com/ukrainets.in.ua"
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
                  href={contact.firstInfo.includes("@") ? `mailto:${contact.firstInfo}` : `tel:${contact.firstInfo}`}
                >
                  {contact.firstInfo.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
                </a>

                {contact.secondInfo && (
                  <a
                    className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
                    href={contact.firstInfo.includes("@") ? `mailto:${contact.firstInfo}` : `tel:${contact.firstInfo}`}
                  >
                    {contact.firstInfo.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
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
