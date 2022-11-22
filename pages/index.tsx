import type { NextPage } from 'next';

import {
  DeliverySteps,
  HeroSection,
  HomeHeader,
  Layout,
  ScheduleFromEngland,
  ScheduleFromUkraine,
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeHeader />

        <HeroSection />

        <ScheduleFromEngland />

        <ScheduleFromUkraine />
      </Layout>

      <DeliverySteps />
    </>
  );
};

export default Home;
