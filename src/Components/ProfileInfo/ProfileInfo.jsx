import React from 'react';
import "./ProfileInfo.scss";

const ProfileInfo = (props) => {
   const { followers, following, uploads } = props;
   return <div className='profileInfo'>
      <h3 className='profileInfo__heading'>{uploads}<br /><span> posts</span></h3>
      <h3 className='profileInfo__heading'>{followers}<br /><span> followers</span></h3>
      <h3 className='profileInfo__heading'>{following}<br /><span> following</span></h3>
   </div>;
};

export default ProfileInfo;
