import { memo } from 'react';
// import App from '../App';
// import Footer from '../components/layout/Footer';
import HeroSection from '../components/layout/HeroSection';
import BHeroSection from '../components/layout/BHeroSection';
// import GoogleMap from '../components/layout/GoogleMap';
const Home = () => {
  return (
    <div className="Home">
      <HeroSection/>
      <BHeroSection/>
         {/* <GoogleMap/> */}

    </div>
  );
};

export default memo(Home);