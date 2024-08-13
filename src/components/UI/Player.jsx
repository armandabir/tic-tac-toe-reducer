import styles from "./../styles/player.module.scss"
export default function Player(){

    return (

        <li className={styles.active}>
            <span className={styles.player} >
                <span className={styles.playerName}>player1</span>
                <span className={styles.playerSymbol}>X</span>
            </span>
            <button>save</button>
        </li>

    )
}