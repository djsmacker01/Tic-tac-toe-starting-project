import { useState } from "react";
import DemoPlayer from "./Components/DemoPlayer";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectPlayer(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X'? 'O': 'X')
}
  return (
    <main>
      <div id="game-container">
        {/* Player names */}
        <ol id="players">
          <DemoPlayer initialName='Player 1' symbols='X' />
          <DemoPlayer initialName='Player 2' symbols='O'/>

          {/* <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" /> */}
        </ol>
        {/* game board */}
        {/* Game Board */}
        <GameBoard onSelectPlayerButton={handleSelectPlayer} />
      </div>
      Log
    </main>
  );
}

export default App;
