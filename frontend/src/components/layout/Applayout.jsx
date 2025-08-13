import { memo } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import { Outlet } from 'react-router-dom';
import HeroSection from './HeroSection.jsx';
import BHeroSection from './BHeroSection.jsx';
import GoogleMap from './GoogleMap.jsx';
const Applayout = () => {
  return (
   <>
    <Navbar /> 
 
   <Outlet/>
   <GoogleMap/>
   <Footer />
   </>
  );
};

export default memo(Applayout);