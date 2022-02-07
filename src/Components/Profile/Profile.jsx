import React from 'react';
import "./Profile.scss";

import CheckLogo from "../../Assets/images/check-logo.svg"
import UserCircle from "../../Assets/images/user-circle.svg";
import ElipsisIcon from "../../Assets/images/ellipsis-icon.svg";
import ChevronDown from "../../Assets/images/chevron-down.svg";


const Profile = () => {
   return <div className='profile'>
      <img className='profile__image' src={UserCircle} alt="" />
      <h2 className="profile__username">User Name</h2>
      <img className='profile__icon' src={CheckLogo} alt="" />
      <img className='profile__icon' src={ElipsisIcon} alt="" />
      <button className='profile__button-follow'>Follow</button>
      <button><img className='profile__icon' src={ChevronDown} alt="" /></button>
   </div>;
};

export default Profile;
