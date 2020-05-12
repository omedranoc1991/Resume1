import React from "react";
import "../Styles/index.css";
 

function Resume (props) {
return (
    <div>
      <div className="left">
        <img className="personalPhoto" src={props.img}  />
      </div>
      <div className="right">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
            
    </div>
 
 )

}


export default Resume