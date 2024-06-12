import { useState } from "react"
export default function Player({name,symbol,isActive,onChange}){
    const [isEditing , setIsEditing] =useState(false)
   const [playerName,setplayerName]= useState(name);
    function handlerEditing(){
        setIsEditing((isediting)=>!isediting)
      if(isEditing)
        if(typeof onChange==="function"){

            onChange(symbol,playerName)
        }
        else
        {
            console.log("onChangeName is not a function")
        } 
        
    }

    function handleChange(event){
        setplayerName(event.target.value)
    }
    let editablePlayerName =<span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName=  <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return<>
     <li className={isActive ? 'active':undefined}>
          <span className="player">
           {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handlerEditing}>{isEditing ? "Save " : "Edit"}</button>
          </li>
    </>
}