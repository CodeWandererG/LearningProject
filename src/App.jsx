import { useState } from "react";
import GameBoard from "../components/GameBoard";
import Player from "../components/Player";
import Log from "../components/Log";
import { WINNING_COMBINATIONS } from "../components/winninng-combination";
import GameOver from "../components/GameOver";

const mat = [
  [null , null , null],
  [null , null , null],
  [null , null , null]
]


function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }

  return currentPlayer
}
function App() {
  const [gameTurns , setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...mat.map(array => [...array])];

  for(const turn of gameTurns){
      const {  square , player} = turn;
      const {row , col} = square;

      gameBoard[row][col] = player;
  }

  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol==secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length == 9 && !winner ? true : false; 

  function handleSelectSquare(row , col){ 
    // this function will be used in two components the liftinng state up
    // concept in ancestor compenent is implemented
    // setActivePlayer(prevVal => prevVal === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      
      const updatedTurns = [ 
        {square: {row : row , col: col} , player:activePlayer}, 
        ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  // passing the function as prop
  // <h1><GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/></h1>
    
  
  function handleRestart(){
      setGameTurns(prev => []);
  }
  return (
    <>
      <div className="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer=== "X"}/>          
          <Player initialName="Player 2" symbol="0" isActive={activePlayer=== "O"}/> 
        </ol>
      </div>
      {(winner || hasDraw )&& <GameOver winner={winner} onSelect={handleRestart}/>}
      <h1><GameBoard onSelectSquare={handleSelectSquare} board = {gameBoard}/></h1>
      <Log turns={gameTurns}/>
    </>
  )
}

export default App;
