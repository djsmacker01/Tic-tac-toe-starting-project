import Player from "./Components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        {/* Player names */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/* game board */}
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
