import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Rex Oliver</div>
      <nav className="header__nav">
        <Link to="/">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
