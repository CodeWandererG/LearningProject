import { useState } from "react";
import GameBoard from "../components/GameBoard";
import Player from "../components/Player"

function App() {

  const [activePlayer , setActivePlayer] = useState("X");

  function handleSelectSquare(){ 
    // this function will be used in two components the liftinng state up
    // concept in ancestor compenent is implemented
    setActivePlayer(prevVal => prevVal === "X" ? "O" : "X");
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
      <h1><GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/></h1>
    </>
  )
}

export default App;
