import {  memo } from 'react';
import { Link } from 'react-router-dom';
const Button = ({children,onClick}) => {
  return (
 <button   onClick={onClick}   className='mt-6 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition-transform duration-300 hover:scale-105'>
    {children} 
   </button>
       );
};

export default memo(Button);