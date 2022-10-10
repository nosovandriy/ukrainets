import type { NextPage } from 'next';

import {
  HeroSection,
  HomeHeader,
  Layout,
  ScheduleFromEngland,
  ScheduleFromUkraine,
} from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHeader />

      <HeroSection />

      <ScheduleFromEngland />

      <ScheduleFromUkraine />
    </Layout>
  );
};

export default Home;
