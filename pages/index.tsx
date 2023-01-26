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
  RulesSection,
  TestimonialsSection,
  PartnersSection,
  DeliverySection,
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
        {/* <ScheduleFromUkraine /> */}
      </Layout>

      <DeliverySteps />

      <Layout>
        <QualitySection />
      </Layout>
      <TestimonialsSection />
      <DeliverySection />
      <PartnersSection />
       <RulesSection />
       <UkraineSection />
      <Footer />
    </>
  );
};

export default Home;