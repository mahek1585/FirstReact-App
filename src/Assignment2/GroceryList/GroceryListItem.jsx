import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const GroceryListItem = (props) => {

    function onDelete() {
        console.log(props.name);
        const id = props.id;
        props.onDelete(id);
      }
    
  return (
    <div>
        <li>
                <span>{props.name}</span>
                <RiDeleteBinLine size={24} className="delete-btn"  onClick={onDelete}/> 
        </li>
    </div>
  );
};

export default GroceryListItem

