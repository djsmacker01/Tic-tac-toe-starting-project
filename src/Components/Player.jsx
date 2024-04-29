import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditing() {
      console.log('edit')

      //create a function when you state depends on the previous state
      setIsEditing(editing => !editing)
      // setIsEditing((editing) => !editing);
      
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) { 
      playerName = <input type="text" required value={ name } />
    }
    return (
      <li>
        <span className="player">
               {playerName}
                <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? 'Save':  'Edit'}</button>
      </li>
    );
 }