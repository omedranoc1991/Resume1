import React from "react";
import ReactDOM from "react-dom";
import Resume from "./components/Resume"
import Skill from "./components/Skill"
import images from "./images/oscar.png"



const container = document.getElementById("root")

ReactDOM.render(
   <div>< Resume 
   img={images}
   name="Oscar Medrano"
   title="About me"
   text="I am Oscar Medrano, I have experience with web development, especially with HTML, CSS and JavaScript , also I have knowledge in Bootstrap, Node.js, Mongo.DB and React. "
   />
    < Skill  / >
   </div> ,
     container
     )

