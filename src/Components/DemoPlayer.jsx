import { useState } from "react";
export default function DemoPlayer({ initialName, symbols }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editPlayer, setPlayerName] = useState(initialName);

  function handleEditButton() {
    console.log("button clicked");
    setIsEditing((editing) => !editing);
  }

  function handleChange() {
    setPlayerNames()
  }

  let playerName = <span className="player-name"> {editPlayer}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={editPlayer}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
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
