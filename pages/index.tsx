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
  RulesSection,
  Footer,
} from '../components';
import { DesktopNavigation, MobileNavigation } from '@components/navigation';

const Home: NextPage = () => {
  return (
    <>
      {/* <MobileNavigation />

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

      <DeliverySection /> */}
      <RulesSection />
      <Footer />
    </>
  );
};

export default Home;