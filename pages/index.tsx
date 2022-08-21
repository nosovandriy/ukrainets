import type { NextPage } from 'next';

import { HeroSection, HomeHeader } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <HomeHeader />

      <HeroSection />
    </div>
  );
};

export default Home;
