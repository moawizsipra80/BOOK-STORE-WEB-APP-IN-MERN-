import { memo } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import { Outlet } from 'react-router-dom';
const Applayout = () => {
  return (
   <>
   <Header />
   <Navbar /> 
   <Outlet/>
   <Footer />
   </>
  );
};

export default memo(Applayout);