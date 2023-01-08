import Image from 'next/image';

import style from './footer.module.scss';

const contacts  = [
  {"id": 1,
   "title": "Англія",
   "firstInfo": "+447738204457",
   "secondInfo": "+447982651844",
  },
  {"id": 2,
   "title": "Україна",
   "firstInfo": "+380677144424",
   "secondInfo": "",
  },
  {"id": 3,
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
          <div className={style.footer__contacts__contact}>
            <h4 className={style.footer__contacts__contact__title}>
              Англія:
            </h4>
            <a
              className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
              href="tel:+447738204457"
            >
              +44 77 382 044 57
            </a>
            <a
              className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
              href="tel:+447982651844"
            >
              +44 79 826 518 44
            </a>
          </div>

          <div className={style.footer__contacts__contact}>
            <h4 className={style.footer__contacts__contact__title}>
              Україна:
            </h4>
            <a
              className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
              href="tel:+380677144424"
            >
              +38 (067) 714 44 24
            </a>
          </div>

          <div
           className={style.footer__contacts__contact}
           >
            <h4 className={style.footer__contacts__contact__title}>
              E-mail:
            </h4>
            <a
              className={`${style.footer__contacts__contact__info} ${style.textDecoration}`}
              href="mailto:contact@britishpost.com.ua"
            >
              contact@britishpost.com.ua
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
