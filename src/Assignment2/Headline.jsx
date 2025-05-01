import React from 'react'


const Headline = (props) => {
  return (
    <h1 className="heading">{props.children}</h1>
  );
};

export default Headline