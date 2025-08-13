import { memo } from 'react';
import BHeroSectionimg from '../UI/BHeroSectionimg.jpg';
import { BsFillHeartFill } from 'react-icons/bs'; // Correct import for heart icon
import { BiEdit } from 'react-icons/bi';          // Edit icon for UpdateBook
import { FaTrashAlt, FaTags } from 'react-icons/fa';
import { motion } from 'framer-motion';
const BHeroSection = () => {
    const feat=[{icon:<BsFillHeartFill size={40}/>,lable:'AddBook'},
                 {icon:<BiEdit size={40}/>,lable:'UpdateBook'},
                 {icon:<FaTrashAlt size={40}/>,lable:'DeleteBook'},
                 {icon:<FaTags size={40}/>,lable:'Tags'}
  ];
  return (

 <section className='bg-purple-400 py-20 md:0'>
  <div className='text-center text-white font-bold text-3xl mb-10'>
      <h2>FEATURES</h2>
      </div>
      {/*card contaner shuru ho raha ha*/}
      <motion.div
      initial={{opacity:0,x:'-100%'}}
      transition={{duration:1,delay:0.5}}
      whileInView={{opacity:1,x:'0%'}}
      > 
    <div className='flex justify-center gap-6 flex-wrap'>
      {feat.map(({icon,lable},index)=>(
    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-40 hover:shadow-2xl transition">
      <div className='text-purple-500 mb-2'>{icon}</div>
        <div className='text-purple-400 font-semibold'>{lable}</div>
    </div>
    
  ))}
      </div>
      </motion.div>
   </section>
  );
};

export default memo(BHeroSection);