import { memo } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Navbarbutton from "../UI/Navbarbutton";
const Navbar = () => {
  return (
    <nav className="bg-purple-400 p-3">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left side: Logo */}
        <div>
          <h2 className="text-white text-2xl font-bold">BOOKSTORE</h2>
        </div>

        {/* Center: Nav links */}
        <div className="flex space-x-10">
          <Navbarbutton className="text-white hover:underline" to="/">Home</Navbarbutton>
          <Navbarbutton className="text-white hover:underline" to="/CreateBook">SearchBook</Navbarbutton>
          <Navbarbutton className="text-white hover:underline" to="/Buynow">BuyNow</Navbarbutton>
          <Navbarbutton className="text-white hover:underline" to="/Addbook">AddBook</Navbarbutton>
        </div>

        {/* Right side: Search */}
        <div className="flex items-center space-x-2">
          <FaSearch size={20} color="white" />
          <input
            type="text"
            placeholder="Search for book..."
            className="px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

      </div>
    </nav>
  );
};

export default memo(Navbar);
