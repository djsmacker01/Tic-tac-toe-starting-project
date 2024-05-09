import { useState } from "react";

const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectPlayerButton}) {
  const [gameBoard, setGameBoard] = useState(initialBoardGame);

  function handleButtonClick(rowIndex, colIndex) {
    // alert("button click");
      setGameBoard((prevGameBoard) => {
          const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
          updatedBoard[rowIndex][colIndex] = 'X';
          return updatedBoard
      });
    onSelectPlayerButtonChange()
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleButtonClick(rowIndex, colIndex)}>{playerSymbol}</button>
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
