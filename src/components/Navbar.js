import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({isActive}) => isActive ? 'active link' : 'link'}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? 'active link' : 'link'}>About</NavLink>
      <NavLink to="/products" className={({isActive}) => isActive ? 'active link' : 'link'}>Products</NavLink>
    </nav>
  );
};
export default Navbar;
