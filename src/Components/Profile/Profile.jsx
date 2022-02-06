import React from 'react';
import "./Profile.scss";

import CheckLogo from "../../Assets/data/images/check-logo.svg"
import UserCircle from "../../Assets/data/images/user-circle.svg";
import ElipsisIcon from "../../Assets/data/images/ellipsis-icon.svg";
import ChevronDown from "../../Assets/data/images/chevron-down.svg";


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
