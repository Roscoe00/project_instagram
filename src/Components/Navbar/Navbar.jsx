import React from 'react';
import HomeLogo from "../../Assets/images/home-logo.svg";
import Plane from "../../Assets/images/paper-plane.svg";
import Plus from "../../Assets/images/plus-square.svg";
import Compass from "../../Assets/images/compass-logo.svg";
import Heart from "../../Assets/images/heart-logo.svg";
import UserCircle from "../../Assets/images/user-circle.svg";

import "./Navbar.scss";

const Navbar = () => {
  return <div className='navbar'>
    <h1>Instagram</h1>
    <img className="navbar__logo" src={HomeLogo} alt="home icon" />
    <img className="navbar__logo" src={Plane} alt="chats" />
    <img className="navbar__logo" src={Plus} alt="add" />
    <img className="navbar__logo" src={Compass} alt="explore" />
    <img className="navbar__logo" src={Heart} alt="liked" />
    <img className="navbar__logo" src={UserCircle} alt="user profile" />
  </div>;
};

export default Navbar;
