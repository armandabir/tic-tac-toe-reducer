import { useRef, useState } from "react"
import styles from "./../styles/player.module.scss"
export default function Player({playerName,playerSymbol,isActive,onChangeName}){
    const [editState,setEditState]=useState(false)
    let namebox=<span className={styles.playerName}>{playerName}</span>
    
    if(editState){
        namebox=<input onChange={((e)=>handleOnChange(e.target.value))} type="text"></input>
    }

    function handleOnEdit(){
        setEditState((editState)=>!editState)
    }

    function handleOnChange(value){

        onChangeName(value,playerSymbol);
    }
    return (

        <li className={isActive?styles.active:""}>
            <span className={styles.player} >
                {namebox}
                <span className={styles.playerSymbol}>{playerSymbol}</span>
            </span>
            <button onClick={handleOnEdit}>{editState?"save":"edit"}</button>
        </li>

    )
}