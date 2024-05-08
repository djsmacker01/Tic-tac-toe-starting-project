import { useState } from "react";
export default function DemoPlayer({ initialName, symbols }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableName, isEditableName] = useState(initialName)

  function handleEditButton() {
    console.log("button clicked");
    setIsEditing((editing) => !editing);
    
  }

  function handleChange() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name"> {editableName}</span>;
  let btnCaption = 'Edit'
  if (isEditing) {
    playerName = <input type="text" required  value={editableName} onChange={handleChange}/>;
    btnCaption = 'Save'
  

  }

  return (
    <>
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbols}</span>
        </span>
        <button onClick={handleEditButton}>{btnCaption}</button>
      </li>
    </>
  );
}
