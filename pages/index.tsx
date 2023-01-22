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
  TestimonialsSection,
  AboutSection,
  PartnersSection,
  UkraineSection,
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

      <TestimonialsSection />
      <DeliverySection />
      <PartnersSection />
      <UkraineSection />
      <Footer />
    </>
  );
};

export default Home;
