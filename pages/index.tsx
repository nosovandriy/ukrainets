import styles from '../styles/Home.module.css';

import classNames from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';

import { Company, HomeHeader } from '../components';

const Home: NextPage = () => {
  const facebookLink = 'https://www.facebook.com/britishpost/';

  return (
    <div>
      <HomeHeader />

      <main className={styles.container}>
        <div className={styles.maintenancePage}>
          <Company />

          <div
            className={classNames(styles.maintenanceTitle, 'text-stone-700')}
          >
            [ Сторінка розробляється ]
          </div>

          <div>
            <span
              className={classNames(
                styles.facebookLink,
                'text-stone-700',
                'font-bold'
              )}
            >
              Сконтактуватися з нами можна у{' '}
            </span>
            <span
              className={classNames(
                styles.facebookLink,
                'text-stone-700',
                'font-bold',
                'underline decoration-4'
              )}
            >
              <Link href={facebookLink}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-sky-500"
                >
                  facebook.
                </a>
              </Link>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
