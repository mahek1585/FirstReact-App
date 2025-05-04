import React, { createContext, useState, useContext } from 'react';

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <ClickContext.Provider value={{ count, increment, decrement }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
