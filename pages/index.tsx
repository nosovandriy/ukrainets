import type { NextPage } from 'next';

import {
  HeroSection,
  HomeHeader,
  Layout,
  ScheduleFromUkraine,
} from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHeader />

      <HeroSection />

      <ScheduleFromUkraine />
    </Layout>
  );
};

export default Home;
