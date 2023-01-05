import type { NextPage } from 'next';

import {
  DeliverySteps,
  HeroSection,
  HomeHeader,
  Layout,
  ScheduleFromEngland,
  ScheduleFromUkraine,
  AboutSection,
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeHeader />
        <HeroSection />
      </Layout>
      <AboutSection />
      <Layout>
        <ScheduleFromEngland />
        <ScheduleFromUkraine />
      </Layout>

      <DeliverySteps />
    </>
  );
};

export default Home;
