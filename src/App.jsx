import styles from "./app.module.scss"
import logo from "./assets/game-logo.png"
import Player from "./components/UI/Player"
function App() {

  return (
    <>
     <header>
          <img src={logo} alt="" />
          <h1>Tic-Tac-toe</h1>
     </header>
     <main>
        <div id={styles.gameContainer}>
            <ol id={styles.players} className={styles.highlightPlayer}>
              <Player/>
              <Player/>
            </ol>
            
        </div>
     </main>
    </>
  )
}

export default App
