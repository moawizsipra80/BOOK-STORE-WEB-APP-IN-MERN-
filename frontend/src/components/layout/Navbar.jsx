import { memo } from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <Link className="nav-link text black" to="/">Home</Link>
  <Link className="nav-link text black" to="/CreateBook">CreateBook</Link>
  <Link className="nav-link text black" to="/DeleteBook">DeleteBook</Link>
  <Link className="nav-link text black" to="/Addbook">AddBook</Link>
</nav>

  );
};

export default memo(Navbar);