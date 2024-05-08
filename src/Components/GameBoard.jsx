import { useState } from "react";
const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialBoardGame);
    
  return (
    <ol id="game-board">
      {initialBoardGame.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// const initialBoardGame = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// //   [null, null, null],
// ];

// export default function GameBoard() {

//     return (
//         <ol id="game-board">
//             {initialBoardGame.map((row, rowIndex) => <li key={rowIndex}>
//                 <ol>
//                     {row.map((col, colIndex) => <li key={colIndex}><button>{col}</button></li>)}
//                 </ol>
//             </li>)}
//        </ol>
//     )
// }