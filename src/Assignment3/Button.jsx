import React from 'react';
import './Home.css';

const Button = ({ onClick, text, dark }) => {
  return (
    <button
      className={`button ${dark ? 'button-dark' : 'button-light'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;