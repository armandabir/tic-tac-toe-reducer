import { useEffect, useState } from "react"
import styles from "./app.module.scss"
import logo from "./assets/game-logo.png"
import GameBoard from "./components/UI/GameBoard"
import Player from "./components/UI/Player"
import { useReducer } from "react"
import Log from "./components/UI/Log"
import {WINNING_COMBINATIONS} from "./winning-combinations"
import GameOver from "./components/UI/GameOver"
const intialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

const intialGameState={
  "players":{
    X:"player1",
    O:"player2"
  },
  "activePlayer":"",
  "gameTurns":[
    // {"palyer":X , "square":{"row":1,"col":2}}
  ]
}

function gameTurnsReduser(gameState,action){

  switch (action.type) {
    case "changeName":
          let tempPlayers={...gameState.players,[action.playerSymbol]:action.playerName}
          return {...gameState,players:tempPlayers}
      break;

    case "gameTurn":

        const players=gameState.players

        let currentPlayer="X"
        if(gameState.activePlayer=="X"){
          currentPlayer="O"
        }
        
        let newTurn=[{"player":currentPlayer,"square":{"row":action.turn.row,"col":action.turn.col}},...gameState.gameTurns]
       

     

        return {players,gameTurns:newTurn,activePlayer:currentPlayer}
    break;
    case "restart":
      return intialGameState
    break;
    default:
      break;
  }

}

function drivedGameBoard(gameState){
   let gameBoard=intialBoard.map((row)=>[...row])
   for (const turn of gameState.gameTurns) {
          let {player,square}=turn
          let {row,col}=square

          gameBoard[row][col]=player
   }

   return gameBoard;
}

function drivedWinner(gameBoard,players){
  let winner;
   for (const combonation of WINNING_COMBINATIONS) {
        const firstSymbol=gameBoard[combonation[0].row][combonation[0].column]
        const secondSymbol=gameBoard[combonation[1].row][combonation[1].column]
        const thirdSymbol=gameBoard[combonation[2].row][combonation[2].column]

        if(firstSymbol && firstSymbol==secondSymbol && secondSymbol ==thirdSymbol){
          winner=players[firstSymbol]
        }
   }

    return winner
}


function App() {


function handleOnChangeName(name,symbol){
    dispach({
      type:"changeName",
      playerName:name,
      playerSymbol:symbol
    })
}

function HandleOnSquareClick(ri,ci){
  dispach({
    type:"gameTurn",
    turn:{"row":ri,"col":ci}
  })
}


function handleOnRestart(){
    dispach({
      type:"restart"
    })
}

const [gameState,dispach]=useReducer(gameTurnsReduser,intialGameState);
const gameBoard=drivedGameBoard(gameState)
const winner=drivedWinner(gameBoard,gameState.players)
const hasDraw=gameState.gameTurns.length == 9 && !winner
useEffect(()=>{
  console.log(gameState)
},[gameState])




  return (
    <>
     <header>
          <img src={logo} alt="" />
          <h1>Tic-Tac-toe</h1>
     </header>
     <main>
        <div id={styles.gameContainer}>
            <ol id={styles.players} className={styles.highlightPlayer}>
              <Player playerName={gameState.players.X} playerSymbol={'X'} isActive={gameState.activePlayer=="X"} onChangeName={handleOnChangeName}/>
              <Player playerName={gameState.players.O} playerSymbol={'O'} isActive={gameState.activePlayer=="O"} onChangeName={handleOnChangeName}/>
            </ol>
          <GameBoard board={gameBoard} onSquareClick={HandleOnSquareClick}/>
      
        {(winner || hasDraw ) &&(<GameOver winner={winner} onRestart={handleOnRestart}/>)}
        </div>
        <Log turns={gameState.gameTurns}/>
     </main>
    </>
  )
}

export default App
