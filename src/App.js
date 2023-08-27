import React from "react";
import { useState } from "react";

var x = 0;

function Square(){

  const [value,setValue] = useState(null);

  function handleClick(){
    x % 2 ? setValue('O') : setValue('X');
    console.log("Clicked" + " " + ++x + " times")
    console.log("Set State Value : " + )
  }

  return ( <button className="square" onClick={handleClick} >{value}</button> );
} 


export default function Board() {
  return(
  <div>
    
      <div className="board-row">
       <Square  /><Square /><Square />
      </div>
      <div className="board-row">
      <Square  /><Square  /><Square />
      </div>
      <div className="board-row">
      <Square /><Square  /><Square />
      </div>

   </div>
  );
}