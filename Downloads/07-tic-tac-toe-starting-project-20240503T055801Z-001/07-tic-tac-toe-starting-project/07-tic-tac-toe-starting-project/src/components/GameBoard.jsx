//to store state of each block in a two dimesional array

function GameBoard({ onSelectSquare, board }) {
  
  //this is called derivivng state
  //lifted this logic from here to app.js
  //because we needed gameboard there so we can simply move the logic also
  //the only thing that will change is that turns will be now gameTurns
  //because earlier we were passing it as props
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }
  // const [gameBoard,setGameBoard]=useState(initialGameBoard);
  // function handleSelectSquare(rowIndex,colIndex){
  //     setGameBoard((prevGameBoard)=>{
  //       const updatedBoard=[...prevGameBoard.map(innerElements=>[...innerElements])];
  //       updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!==null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
