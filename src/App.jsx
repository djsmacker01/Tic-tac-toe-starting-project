
function App() {
  return (
    <main>
      <div id="game-container">
        {/* Player names */}
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">player 1</span>
              <span className="player-symbol">X</span>
            </span>
          </li>

          <li>
            <span className="player">
              <span className="player-name">player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li>
        </ol>
        {/* game board */}
        Game Board
      </div>
      Log
    </main>
  );
}

export default App