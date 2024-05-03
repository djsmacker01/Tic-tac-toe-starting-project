import { useState } from "react";
export default function DemoPlayer({ initialName, symbols }) {
  const [edit, setIsEditing] = useState(false)

  function handleEditButton() {
    console.log('button clicked')
    setIsEditing(true)
  }
  return (
    <>
      <li>
        <span className="player">
          <span className="player-name"> {initialName}</span>
          <span className="player-symbol">{symbols}</span>
        </span>
        <button onClick={handleEditButton}>Edit</button>
      </li>
    </>
  );
}
