
function App() {
  return (
    <main>
      <div id="game-container">
        {/* Player names */}
        <ol id="players">
         

          <li>
            <span className="player">
              <span className="player-name">player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
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
