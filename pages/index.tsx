import type { NextPage } from 'next';

import {
  Layout,
  HomeHeader,
  HeroSection,
  AboutSection,
  ScheduleFromEngland,
  ScheduleFromUkraine,
  DeliverySteps,
  QualitySection,
  DeliverySection,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;