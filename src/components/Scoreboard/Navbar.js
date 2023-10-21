import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo"><Link to="/">WinZone</Link></h1>
        <ul className="main-nav">
          <li><Link to="/login">Login</Link></li> 
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
