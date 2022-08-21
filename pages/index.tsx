import styles from '../styles/Home.module.scss';

import classNames from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';

import { Company, HomeHeader } from '../components';

const Home: NextPage = () => {
  const facebookLink = 'https://www.facebook.com/britishpost/';

  return (
    <div>
      <main className={styles.container}></main>
    </div>
  );
};

export default Home;
