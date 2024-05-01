import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newPlayerName, setNewPlayerName] = useState(initialName)

    function handleEditing() {
      console.log('edit')
      //create a function when you state depends on the previous state
      setIsEditing(editing => !editing)
      // setIsEditing((editing) => !editing);
    
    }

  function handleChange(event) {
    setNewPlayerName(event.target.value)
  }
  
    let playerName = <span className="player-name">{newPlayerName}</span>;

    if (isEditing) { 
      playerName = <input type="text" required value={newPlayerName } onChange={handleChange} />
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