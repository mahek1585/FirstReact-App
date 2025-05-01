import React from 'react'
import GroceryListItem from './GroceryListItem';

const GroceryList = (props) => {
  return (
    <div>
              <ul>
                {props.list.map((listItem) => {
                    return (
                    <GroceryListItem   key={listItem.id}
                    id={listItem.id}
                    name={listItem.name}
                    onDelete={props.onDelete}
                    />
                    );
                })
                }
        
              </ul>
    </div>
  );
};

export default GroceryList
