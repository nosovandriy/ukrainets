import type { NextPage } from 'next';

import {
  DeliverySection,
  DeliverySteps,
  HeroSection,
  HomeHeader,
  Layout,
  QualitySection,
  ScheduleFromEngland,
  ScheduleFromUkraine,
  AboutSection,
} from '../components';
import { DesktopNavigation, MobileNavigation } from '@components/navigation';

const Home: NextPage = () => {
  return (
    <>
      <MobileNavigation />

      <Layout>
        <DesktopNavigation />

        <HomeHeader />

        <HeroSection />
      </Layout>

      <AboutSection />

      <Layout>
        <ScheduleFromEngland />

        <ScheduleFromUkraine />
      </Layout>

      <DeliverySteps />

      <Layout>
        <QualitySection />
      </Layout>

      <DeliverySection />
    </>
  );
};

export default Home;
