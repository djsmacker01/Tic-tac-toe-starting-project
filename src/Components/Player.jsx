import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditing() {
        console.log('edit')
        setIsEditing(true)
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) { 

    }
    return (
      <li>
        <span className="player">
               {playerName}
                <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>Edit</button>
      </li>
    );
 }