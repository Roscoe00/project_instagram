import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import Page from '../../Components/Page/Page';
import userData from '../../Assets/data/userData';

const Routing = () => {
   const pagesConstructor = userData.map((user, index) => (
      <Route path={"/user__" + index} key={"user__" + index} element={<Page userName={user.userName} description={user.description} />} followers={user.followers} following={user.following} uploads={user.uploads} />
   ))

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
