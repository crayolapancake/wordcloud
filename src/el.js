import React from 'react';
import './El.css';




const el = (props) => {
  return (
    // <legend>{feelings[word]}</legend>
    <ul
      className="El"
      // onLoadStart={props.plotcircle}
      // placewords={props.placewords}
      onClick={props.click}
      style={props.style}
      >{props.emotion}
    </ul>
  )
}


export default el;
