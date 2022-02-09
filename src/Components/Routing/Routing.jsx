import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import Page from '../../Components/Page/Page';
import userData from '../../Assets/data/userData';

const Routing = () => {
   const pagesConstructor = userData.map((user, index) => {
      // console.log(user.followers)
      // console.log(user.following)
      // console.log(user.uploads.map(image => image))
      return (
         <Route path={"/user__" + index} key={"user__" + index} element={<Page userName={user.userName} description={user.description} followers={user.followers} following={user.following} uploads={user.uploads.length} images={user.uploads.map(image => image)} />} />
      )
   })

   return <div>
      <Navbar />
      <Router>
         <Routes>
            {pagesConstructor}
         </Routes>
      </Router>
   </div>;
};

export default Routing;
