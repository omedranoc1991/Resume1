import React from "react"

function Test (){
    const frutas = ["pera", "manzana", "banano", "pina", "durazno"];
    
    return (
<div> 
       <ul>
          {frutas.map(function (fruta){return <li>{fruta}</li>} )}
       </ul>
     </div>

    )
     
     
         
    }
    
    


    export default Test 
    