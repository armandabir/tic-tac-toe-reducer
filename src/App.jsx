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

const PLAYERS={
  X:"player1",
  O:"player2"
}

function gameTurnsReduser(gameTurns,action){

}


function App() {

  
function handleOnChangeName(name,symbol){
  setPlayers((prevPlayers)=>{
    return {...prevPlayers,[symbol]:name}
  })
}

const [players,setPlayers]=useState(PLAYERS);
const [gameTurns,dispach]=useReducer(gameTurnsReduser,[]);
const activePlayer="X"


  return (
    <>
     <header>
          <img src={logo} alt="" />
          <h1>Tic-Tac-toe</h1>
     </header>
     <main>
        <div id={styles.gameContainer}>
            <ol id={styles.players} className={styles.highlightPlayer}>
              <Player playerName={players.X} playerSymbol={'X'} isActive={activePlayer=="X"} onChangeName={handleOnChangeName}/>
              <Player playerName={players.O} playerSymbol={'O'} isActive={activePlayer=="O"} onChangeName={handleOnChangeName}/>
            </ol>
          <GameBoard board={intialBoard}/>
        </div>
     </main>
    </>
  )
}

export default App
