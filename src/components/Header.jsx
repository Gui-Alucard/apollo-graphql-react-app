import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpaceContext from '../context/SpaceContext';
import profile from '../styles/images/profile.png';
import spacex from '../styles/images/SpaceX-Logo.svg';

function Header() {
  const { toggleProfile } = useContext(SpaceContext);

  const toggleIcon = (
    <Link to="/profile">
      <img className="header-image-profile" data-testid="profile-top-btn" src={ profile } alt="" />
    </Link>
  );

  return (
    <header className="header-container">
      <nav className="header-navbar">
        <Link to="/home">
          <img className="header-image-spacex" data-testid="home-top-btn" src={ spacex } alt="" />
        </Link>
        { (toggleProfile) ? '' : toggleIcon}
      </nav>
    </header>
  );
}

export default Header;
