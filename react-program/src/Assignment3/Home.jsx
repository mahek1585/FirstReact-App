import React from 'react';
import Button from './Button';
import { useClick } from '../Assignment3/ClickContext';
 import '../index.css';

const Home = () => {
  const { count, increment, decrement } = useClick();

  return (
    <div className="container min-h-screen w-screen flex items-center justify-center bg-[#2B2B2B] ">
      <div className="card  h-[36rem] rounded-2xl bg-[#3B3A3A]   ">
      <h1 className="heading text-[4rem] pt-[1rem] px-6 text-white"> ClickCount <sup className="version ">v1.0</sup></h1>    
        
        <div className="box w-[25rem] h-[24rem] mx-[2.4rem] mt-16 mb-4">
            <div className="counterdiv w-[15rem] h-[15rem] mx-[4.8rem] rounded-[31rem] border-6 border-[#9C9C9C] shadow-custom-white flex items-center justify-center bg-radial-custom">
                <div className="counter w-[5rem] h-[12rem] flex items-center justify-center">
                  <div className="count  text-[128px] text-white ">{count}</div>
                </div>
            
            </div>

        <div className="button-group mt-[5.2rem]  flex justify-between gap-[60px]">
          <Button 
            onClick={decrement} 
            text="Decrement" 
            dark 
            className="w-44 h-12 border-1 rounded-2xl gap-8" 
         />
        <Button 
        onClick={increment} 
        text="Increment" 
        className="w-44 h-12 rounded-2xl" 
        />

        </div>
      </div>
      </div>
    </div>
  );
};


export default Home;