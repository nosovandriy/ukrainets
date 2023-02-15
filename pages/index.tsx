import type { NextPage } from 'next';

import { ModalProvider } from '../components/modal-context/modal-provider';
import { ErrorBoundary } from 'react-error-boundary'

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
  // MessengerFbChat,
  Footer,
  CallUsModal,
  CallMeModal,
} from '../components';
import { DesktopNavigation, MobileNavigation } from '@components/navigation';
import { ErrorFallback } from '@components/error-boundary/error-boundary';

const Home: NextPage = () => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => console.log('click')}
      >
        <HomeHeader />
        {/* <MessengerFbChat /> */}
        <ModalProvider>
          <MobileNavigation />
          <Layout>
            <DesktopNavigation />
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
          <CallMeModal />
        </ModalProvider>
      </ErrorBoundary>
    </>
  );
};

export default Home;