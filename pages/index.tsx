import type { NextPage } from 'next';

import { HeroSection, HomeHeader, Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHeader />

      <HeroSection />
    </Layout>
  );
};

export default Home;
