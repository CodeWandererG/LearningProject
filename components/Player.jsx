import { useState } from "react";

export default function Player({initialName , symbol , isActive}) {
    const [playerName , setPlayerName] = useState(initialName); 
    const [edit ,setEdit] = useState(false);
    const editPlayer = () => {
        setEdit(wasEdit => !wasEdit);
        // setEdit((wasEdit) => !wasEdit);  set value instantly 
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>
    if(edit){
        // case of two way binding -> 1. getting the playerName value , 2. Changing the value
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return (
        <>
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            { editPlayerName }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editPlayer}>{edit ? "Save" : "Edit"}</button>
          </li>
        </>
    )
}