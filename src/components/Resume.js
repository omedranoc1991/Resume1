import React from "react";
 

function Resume (props) {
return (
    <div>
      <img src={props.img}  />
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      
    </div>
 
 )

}


export default Resume