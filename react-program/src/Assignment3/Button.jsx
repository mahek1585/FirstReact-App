import React from 'react';

const Button = ({ onClick, text, dark, className = '' }) => {
  return (
    <button
      className={`${dark ? 'bg-[#2B2B2B] text-white' : 'bg-white text-black'} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
