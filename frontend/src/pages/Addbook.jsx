import { memo } from 'react';
// import App from './App.jsx';
import {Link} from 'react-router-dom';
import Search from '../components/UI/Search';
const Addbook = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">

      <div className=' '>
    <h1 className="text-7xl font-bold mb-4 ">Add Your Own Book</h1>
          <p className="text-lg text-gray-700 mb-6 ">Be the Source of best book provider for other users</p></div>
     <Search/>
<div>
  
    </div>
    </div>
    </section>
  );
};

export default memo(Addbook);