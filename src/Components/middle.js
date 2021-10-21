import React from 'react';
import './Middle.css';


function Middle(props) {
    console.log(props.value)
  return(
      <div className="middle col-sm-6"> 
           {props.value}
      </div>
  )
}

export default Middle