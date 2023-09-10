import React from "react";
import { useState } from "react";

var x = 0;


function Square({value,onSquareClick}){
  
  return ( <button className="square" onClick={onSquareClick} >{value}</button> );
} 

 function Board({xisNext, squares , onPlay}) {

    function handleClick(i) {
    console.log("Clicked" + " " + (++x) + " times")

    if( CalculateWinner(squares) || squares[i]){
      console.log("Congratulation You won");
      return;
    }


    const nextSquares = squares.slice();
    
    if(xisNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);

    
  }
   const winner = CalculateWinner(squares);
    let status;
    if(winner){
      status = 'Winner : '+ winner;
    }else{
      status = 'Next player : ' + (xisNext ? 'X':'O');
    }
    

  return(
  <div>
      <div className="status">{status}</div>
      <div className="board-row">
       <Square value = {squares[0]} onSquareClick={() => handleClick(0)} />
       <Square value = {squares[1]} onSquareClick={() => handleClick(1)} />
       <Square value = {squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
      <Square value = {squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value = {squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value = {squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
      <Square value = {squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value = {squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value = {squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

   </div>
  );
}

export default function Game() {

  const[xisNext,setNext] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length-1];
  console.log(currentSquare);


  function handlePlay(nextSquares){
    setHistory([...history , nextSquares]);
    setNext(!xisNext);

  }

  function jumpTo(nextMove) {
    //Todo
  }

  const moves = history.map((squares, move)=>{
    let description;
    if(move > 0){
      description = 'Go to move #' + move;
    }else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick = {() => jumpTo(move) }>
        {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xisNext={xisNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol> {moves} </ol>
      </div>
    </div>
  );
}

function CalculateWinner(squares){

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i=0;i<lines.length;i++) {
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
      return squares[a];
    }
  }
  return null;
}