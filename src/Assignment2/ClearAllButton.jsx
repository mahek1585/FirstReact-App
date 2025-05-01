import React from 'react'

const ClearAllButton = (props) => {

    // function onClick(){
    //     alert("clear all clicked");
    // }
  return (
    <div>
        <div className='clear-wrapper'>
        <button className="clear" onClick={props.onClick}>Clear All</button>
      </div>
    </div>
  )
}

export default ClearAllButton
