
import { IoMdAdd } from "react-icons/io";
import React, { useState } from 'react';


const InputWithButton = (props) => {
  const { placeholder, inputValue, inputHandler, onSubmit } = props;
    // const[inputValue,setInputValue] = useState("");

    function onClickButton() {
      onSubmit();
    }

    // function inputHandler(e){
    //     console.log(e.target.value);
    //     setInputValue(e.target.value);
    // }

   

  return (
    <div className="input-wrapper">
    <input 
        placeholder={placeholder}
        value={inputValue}
        onChange={inputHandler}
        onKeyDown={(e) => {
          console.log(e.target.value);
          if (e.key === "Enter") {
            onSubmit();
          } else {
            inputHandler(e);
          }
        }}
       type="text" />
    <IoMdAdd size={24}  className="add-btn"  onClick={onClickButton}/>
  </div> 

  );
};

export default InputWithButton