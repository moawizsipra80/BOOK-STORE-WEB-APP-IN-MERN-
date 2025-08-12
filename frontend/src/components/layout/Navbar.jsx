import { memo } from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-purple-400 p-3">
    <dv className="containcer-fluid">
  <Link className="nav-link text-white" to="/">Home</Link>
  <Link className="nav-link text-white" to="/CreateBook">CreateBook</Link>
  <Link className="nav-link text-white" to="/DeleteBook">DeleteBook</Link>
  <Link className="nav-link text-white" to="/Addbook">AddBook</Link>
</dv>
</nav>

  );
};

export default memo(Navbar);