import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { WINNING_COMBINATIONS  } from "./components/Winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const PLAYER ={
  'X':"PLAYER 1",
  'O ':"PLAYER 2"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns){
  let currentPlayer ="X"
      if(gameTurns.length>0 &&  gameTurns[0].player==="X"){
        currentPlayer="O";
      }
      return currentPlayer
}

function deriveGameBoard(gameTurns){
  let gameBoard=[...INITIAL_GAME_BOARD.map(array=>[...array])];
  for(const turn of gameTurns){
    const {Square,player}=turn;
    const {row,col}=Square;

    gameBoard[row][col]=player; 
  }
  return gameBoard;
}

function deriveWinner (gameBoard,players){
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner=players[firstSquareSymbol]
    }
  }
  return winner;
}

function App() {
  const[players ,setPlayers] = useState(PLAYER)
  const [gameTurns,setGameTurns]=useState([])
 
  // const [activePlayer,setActivePlayer]=useState("X")
  const activePlayer =deriveActivePlayer(gameTurns)

  
  const gameBoard =deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard,players)
  const hasDraw = gameTurns.length===9&&!winner

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((currentActivePlayer)=>currentActivePlayer === "X" ? "O" :"X")
    setGameTurns(prevTurns => {
      const activePlayer=deriveActivePlayer(prevTurns)

      const updatedTurns=[{ Square:{row:rowIndex,col:colIndex},player:activePlayer},...prevTurns]
      return updatedTurns;
    });
  }
  function handleRestart(){
    setGameTurns([])
  }
  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayer =>{
      return {
        ...prevPlayer,
        [symbol]:newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYER.X} symbol="X"  isActive={activePlayer === 'X'} onChange={handlePlayerNameChange}/>
          <Player name={PLAYER.O} symbol="O" isActive={activePlayer === 'O'} onChange={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}  onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
