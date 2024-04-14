import { useState } from "react";
import GameBoard from "../components/GameBoard";
import Player from "../components/Player";
import Log from "../components/Log";

function App() {
  const [gameTurns , setGameTurns] = useState([]);
  const [activePlayer , setActivePlayer] = useState("X");

  function handleSelectSquare(row , col){ 
    // this function will be used in two components the liftinng state up
    // concept in ancestor compenent is implemented
    setActivePlayer(prevVal => prevVal === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if(prevTurns.length > 0 && prevTurns[0].player === "X"){
        currentPlayer = "O";
      }
      const updatedTurns = [ 
        {square: {row : row , col: col} , player:currentPlayer}, 
        ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  // passing the function as prop
  // <h1><GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/></h1>
    

  return (
    <>
      <div className="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer=== "X"}/>          
          <Player initialName="Player 2" symbol="0" isActive={activePlayer=== "O"}/> 
        </ol>
      </div>
      <h1><GameBoard onSelectSquare={handleSelectSquare} turns = {gameTurns}/></h1>
      <Log turns={gameTurns}/>
    </>
  )
}

export default App;
