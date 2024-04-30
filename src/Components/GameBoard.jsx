const initialBoardGame = [
    [null, null, null],
    [null, null,null],
    [null, null,null],
    
]

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialBoardGame.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={rowIndex}><button></button></li>)}
             </ol>
         </li>)}
        </ol>
    )
}