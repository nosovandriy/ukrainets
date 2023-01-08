import type { NextPage } from 'next';

import {
  DeliverySteps,
  HeroSection,
  HomeHeader,
  Layout,
  QualitySection,
  ScheduleFromEngland,
  ScheduleFromUkraine,
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

        <ScheduleFromEngland />

        <ScheduleFromUkraine />
      </Layout>

      <DeliverySteps />

      <Layout>
        <QualitySection />
      </Layout>
    </>
  );
};

export default Home;
