import Player from "../components/Player"

function App() {
  

  return (
    <>
      <div className="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>          
          <Player initialName="Player 2" symbol="0"/> 
        </ol>
      </div>
      <h1>Game Board</h1>
    </>
  )
}

export default App;
