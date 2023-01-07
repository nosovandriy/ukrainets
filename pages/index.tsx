import type { NextPage } from 'next';

import {
  DeliverySteps,
  HeroSection,
  HomeHeader,
  Layout,
  ScheduleFromEngland,
  ScheduleFromUkraine,
  AboutSection,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
