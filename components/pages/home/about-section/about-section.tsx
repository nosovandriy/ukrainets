import Image from 'next/image';

import style from './about-section.module.scss';
import { MapEurope } from '@components/icons';

export const AboutSection: React.FC = () => {
  return (
    <section id={'about-section'} className={style.aboutSection}>
      <div className={style.aboutSection__map}>
        <MapEurope />
      </div>

      <div className={style.container}>
        <div className={style.aboutSection__aboutUs}>
          <h2 className={style.aboutSection__aboutUs__title}>Хто ми?</h2>
          <p className={style.aboutSection__aboutUs__subTitle}>
            Ми BritishPost — транспортна компанія, що надає послуги з
            перевезення вантажів та посилок з Лондона.
            <br></br>
            <br></br>
            Відправляй все необхідне в Україну вже цього тижня!
          </p>
        </div>

        <div className={style.aboutSection__todos}>
          <div className={style.aboutSection__todo}>
            <div className={style.aboutSection__todo__image1}>
              <Image
                src="/pin_who-we-are.png"
                layout="fill"
                alt="Picture point of the GPS"
              />
            </div>
            <div className={style.aboutSection__todoInfo}>
              <h3 className={style.aboutSection__todoInfo__title}>
                Довозимо
                <br></br>
                посилки до дому
              </h3>
              <p className={style.aboutSection__todoInfo__todoSubTitle}>
                Доставляємо вантаж за адресом, якшо вантаж прибуває в зах.
                частину України.
              </p>
            </div>
          </div>
          <div className={style.aboutSection__todo}>
            <div className={style.aboutSection__todo__image2}>
              <Image
                layout="fill"
                src="/like_who-we-are.png"
                alt="Picture hand OK"
              />
            </div>

            <div className={style.aboutSection__todoInfo}>
              <h3 className={style.aboutSection__todoInfo__title}>
                15 років
                <br></br>
                співпраці
              </h3>

              <p className={style.aboutSection__todoInfo__todoSubTitle}>
                Сумлінна робота
                <br></br>— забезпечення високоякісного транспортування.
              </p>
            </div>
          </div>
          <div className={style.aboutSection__todo}>
            <div className={style.aboutSection__todo__image3}>
              <Image
                src="/time_who-we-are.png"
                layout="responsive"
                width={100}
                height={100}
                alt="Picture of clock"
              />
            </div>

            <div className={style.aboutSection__todoInfo}>
              <h3 className={style.aboutSection__todoInfo__title}>
                Цінуємо
                <br></br>
                Ваш час
              </h3>

              <p className={style.aboutSection__todoInfo__todoSubTitle}>
                Сумлінна робота
                <br></br>— забезпечення високоякісного транспортування.
              </p>
            </div>
          </div>
          <div className={style.aboutSection__todo}>
            <div className={style.aboutSection__todo__image4}>
              <Image
                src="/safe_who-we-are.png"
                layout="fill"
                alt="Picture of door lock"
              />
            </div>

            <div className={style.aboutSection__todoInfo}>
              <h3 className={style.aboutSection__todoInfo__title}>
                Безпечність та
                <br></br>
                надійність
              </h3>

              <p className={style.aboutSection__todoInfo__todoSubTitle}>
                Ваш вантаж — наша
                <br></br>
                відповідальність.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
