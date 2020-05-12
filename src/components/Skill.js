import React from "react";

function Skill (props){
return (
    <div className="bottom">
    
    <h1>Skill</h1>
        <ol>
          <li>{props.skill1}</li> 
          <progress value="70" max="100"></progress>
          <li>{props.skill2}</li>
          <progress value="70" max="100"></progress>
          <li>{props.skill3}</li>
          <progress value="60" max="100"></progress>
          <li>{props.skill4}</li>
          <progress value="40" max="100"></progress> 
        </ol>

    <h1>Languages</h1>
    <ol>
          <li>Spanish</li> 
          <progress value="100" max="100"></progress>
          <li>English</li>
          <progress value="40" max="100"></progress> 
        </ol>



    </div>

 )

}

export default Skill