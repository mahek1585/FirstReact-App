import React from 'react';
import Button from './Button';
import { useClick } from '../Assignment3/ClickContext';
import './Home.css';

const Home = () => {
  const { count, increment, decrement } = useClick();

  return (
    <div className="container">
      <div className="card">
      <h1 className="heading"> ClickCount <sup className="version">v1.0</sup></h1>    
        <div className="box">
        <div className="counterdiv"><div className="counter">
            <div className="count">{count}</div>
                </div>
            </div>
        <div className="button-group">
          <Button onClick={decrement} text="Decrement" dark />
          <Button onClick={increment} text="Increment"  />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;