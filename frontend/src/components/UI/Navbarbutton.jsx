import { memo } from 'react';
import { Link } from "react-router-dom";
const Navbarbutton = ({to,children,className}) => {
  return (
    <Link to={to} className={
        `px-4 py-1 rounded font-semibold transition
         hover:bg-white hover:text-purple-600
         border-2 border-transparent
         text-white ` + className} 
         >{children}</Link>
  );
};

export default memo(Navbarbutton);