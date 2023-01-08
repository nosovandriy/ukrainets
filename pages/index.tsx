import type { NextPage } from 'next';

import {
  DeliverySection,
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
      <DeliverySection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
