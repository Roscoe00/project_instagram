import React from 'react';
import "./Uploads.scss";

const Uploads = (props) => {
   const { photo } = props;
   console.log(photo)
   return <div className="upload">
      <img className='upload__photo' src={photo} alt="" />
   </div>;
};

export default Uploads;
