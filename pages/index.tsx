import type { NextPage } from 'next';

import { HeroSection, HomeHeader, Layout, AboutSection } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeHeader />

        <HeroSection />

      </Layout>

      <AboutSection />
    </>
  );
};

export default Home;
