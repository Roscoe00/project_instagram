import React from 'react';
import Uploads from "../Uploads/Uploads"
import "./UploadsList.scss"

const UploadsList = (props) => {
   const { images } = props;
   console.log(images[0].URL)
   const displayedImages = images.map((image, index) => {
      return (
         <Uploads photo={image.URL} key={"image__" + index} />)
   });
   return <div className="uploadsList">
      {displayedImages}
   </div>
};

export default UploadsList;
