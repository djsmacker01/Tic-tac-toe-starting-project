import { useState } from "react";
export default function DemoPlayer({ initialName, symbols }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    console.log("button clicked");
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name"> {initialName}</span>;
  let btnCaption = 'Edit'
  if (isEditing) {
    playerName = <input type="text" required  value={initialName} />;
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
