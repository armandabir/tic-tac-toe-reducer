import { useState } from "react"
import styles from "./app.module.scss"
import logo from "./assets/game-logo.png"
import GameBoard from "./components/UI/GameBoard"
import Player from "./components/UI/Player"
import { useReducer } from "react"
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
  "activePlayer":"X",
  "gameTurns":[
    // {"palyer":X , "square":{"row":1,"col":2}}
  ]
}

function gameTurnsReduser(gameState,action){

  switch (action.type) {
    case "changeName":
          let tempPlayers={...gameState.players,[action.playerSymbol]:action.playerName}
          return {players:tempPlayers}
      break;

    case "gameTurn":
        let currentPlayer="X"
  
    default:
      break;
  }

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

const [gameState,dispach]=useReducer(gameTurnsReduser,intialGameState);



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
          <GameBoard board={intialBoard} onSquareClick={HandleOnSquareClick}/>
        </div>
     </main>
    </>
  )
}

export default App
