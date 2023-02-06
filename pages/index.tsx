import type { NextPage } from 'next';

import { ModalProvider } from '../components/modal-context/modal-context';

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
  CallUsModal,
} from '../components';
import { DesktopNavigation, MobileNavigation } from '@components/navigation';

const Home: NextPage = () => {
  return (
    <>
      <ModalProvider>
        <MobileNavigation />
        <Layout>
          <DesktopNavigation />
          <HomeHeader />
          <HeroSection />
        </Layout>

        <AboutSection />

        <Layout>
          <ScheduleFromUkraine />
          <ScheduleFromEngland />
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
        <CallUsModal />
      </ModalProvider>
    </>
  );
};

export default Home;