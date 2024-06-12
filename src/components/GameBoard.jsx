
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare,board}) {
  
    //  const [gameBoard,setGameBoard]=useState(initialGameBoard)

    //  function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //           // Create a deep copy of the previous game board
    //         /**
    //          * The issue is that the way you're copying the array in the handleSelectSquare function is incorrect. 
    //          * The object spread operator {...prevGameBoard.map(innerArray => [...innerArray])} is resulting in an object, not an array.
    //          *  Instead, you should directly map the array to create a deep copy.
    //          */
    //         const updatedBoard = prevGameBoard.map((row) => [...row])
    //         // Update the selected square
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    //  }
  return  <ol id="game-board">
       {board.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((col,colIndex) =><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled ={col!==null }>{col}</button></li>)}
        </ol>
       </li>)}
    </ol>
    

} 
