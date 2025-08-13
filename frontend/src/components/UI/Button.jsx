import { memo } from 'react';

const Button = () => {
  return (
 <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition-transform duration-300 hover:scale-105">
        Explore Now
      </button> 
       );
};

export default memo(Button);