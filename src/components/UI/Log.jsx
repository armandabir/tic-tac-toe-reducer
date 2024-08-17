import styles from "./../styles/log.module.scss"
export default function Log({turns}){

    return (
            <ol id={styles.log}>
                {
                    turns.map((trun,index)=><li key={index}>
                        {`Player ${trun.player} Selected [${trun.square.row}][${trun.square.col}]`}
                        
                        </li>)
                }
            </ol>
        
    )
}