import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditing() {
        console.log('edit')
        setIsEditing(true)
    }
    return (
      <li>
        <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>Edit</button>
      </li>
    );
 }