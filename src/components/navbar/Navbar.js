/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <h1>KAV͜͡IN'S World...</h1>
    <div className="nav">
      <NavLink className='h' to="/">Home</NavLink>
      <NavLink className='h' to="/cart">Cart</NavLink>
    </div>
    </>
  );
};

export default Navbar;
