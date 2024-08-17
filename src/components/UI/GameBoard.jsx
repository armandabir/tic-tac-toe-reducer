import styles from "./../styles/gameBoard.module.scss"


export default function GameBoard({board,onSquareClick}){
    function HandleScquareClick(ri,ci){
        onSquareClick(ri,ci);
    }
    return (

        <ol id={styles.gameBoard}>
        {
            board.map((row,ri)=>           
                <li key={ri}>
                    <ol>
                    {
                         row.map((col,ci)=>
                            <li key={ci}>
                                <button onClick={()=>HandleScquareClick(ri,ci)}>{col}</button>
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