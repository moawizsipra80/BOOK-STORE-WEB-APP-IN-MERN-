import { memo } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import HeroSectionimg from '../UI/HeroSectionimg.jpg';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Left Side - Text */}
        <div className="max-w-md text-left">
             <motion.div
          className="max-w-md text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold mb-4 ">Welcome to the ODM Bookshop!</h1>
          <p className="text-lg text-gray-700 mb-6 ">Find your favorite books here.</p>
          <Link to={'/Addbook'}>
        
            <Button to={'/Addbook'} >Explore BOOKS</Button>
          </Link>
            </motion.div>
        </div>
             {/* Right Side - Image */}
   <motion.div
          className="max-w-md text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
<div className="max-w-lg transition-transform duration-300 shadow-md shadow-purple-400 hover:shadow-xl hover:shadow-purple-500 ">
  <img src={HeroSectionimg} alt="Bookstore" className="w-full h-auto rounded" />
</div>
</motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
