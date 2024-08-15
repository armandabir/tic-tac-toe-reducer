import styles from "./../styles/gameBoard.module.scss"


export default function GameBoard({board}){
    return (

        <ol id={styles.gameBoard}>
        {
            board.map((row,ri)=>           
                <li key={ri}>
                    <ol>
                    {
                         row.map((col,ci)=>
                            <li key={ci}>
                                <button>{col}</button>
                            </li>
                            
                        )
                    }
                    </ol>
                </li>
            
            )
        }
    </ol>
    )
}