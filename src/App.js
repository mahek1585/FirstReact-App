// import React from 'react';
import './index.css';
import Headline from './Assignment2/Headline';
import InputWithButton from './Assignment2/InputWithButton';
import ClearAllButton from './Assignment2/ClearAllButton';
import GroceryList from './Assignment2/GroceryList/GroceryList';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const[list,setList] = useState([]);

  const [inputValue,setInputValue]=useState("");
  function inputHandler(e){
    setInputValue(e.target.value);
  }

  function onSubmitInputValue(){
    if (!inputValue.trim()) return;
    console.log("added:",inputValue);
    console.log("Id:",uuidv4());
    
    const newProduct={
      id: uuidv4(),
      name:inputValue,
    };
    
    const newList = [...list, newProduct];
    console.log({ newList, list, newProduct });
    setList(newList);
    setInputValue("");
  }
 
  function onClickClearAll() {
    setList([]);
  }


  function onDelete(productId) {
    console.log("Clicked on Delete Icon");
    console.log({ productId, list });
    const filteredList = list.filter(function (product) {
      if (product.id === productId) {
        return false;
      } else {
        return true;
      }
    });
    console.log({ filteredList });
    setList(filteredList);
  }


  return (
    <div className="container">

      {/* <h1 className="heading">Apni <br />Grocerry</h1> */}
      <Headline>Apni<br/> Grocery</Headline>

      {/* <div className="input-wrapper">
        <input type="text" placeholder="Enter item" />
        <IoMdAdd size={24}  className="add-btn"/>
      </div> */}
      <InputWithButton 
      inputValue ={inputValue}
      inputHandler ={inputHandler}
      onSubmit={onSubmitInputValue}
      placeholder="Enter your product.."/>

      {/* <div className='clear-wrapper'>
        <button className="clear">Clear All</button>
      </div> */}
      {/* <ClearAllButton /> */}
      {list.length !== 0 ? (
          <ClearAllButton onClick={onClickClearAll} />
        ) : null}

      {/* <ul>
        <li>
        <span>Product Name</span>
        <RiDeleteBinLine size={24} className="delete-btn"/> 
        </li>

      </ul> */}
    {/* <GroceryList list = {list}/> */}

    {list.length > 0 ? (
          <GroceryList list={list} onDelete={onDelete} />
        ) : (
          <p className="text-gray-500 text-center">Please Add Product 🥕</p>
        )}
    </div>
  );
};

export default App;
