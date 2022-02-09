import React from 'react';

const Description = (props) => {
   const { description, userName } = props;
   return <div>
      <h3>{userName}</h3>
      <p>{description}</p>
   </div>;
};

export default Description;
