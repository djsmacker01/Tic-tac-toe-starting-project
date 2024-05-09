import { useState } from "react";

export default function DemoPlayer({ initialName, symbols, isActive }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editPlayer, setPlayerName] = useState(initialName);

  function handleEditButton() {
    console.log("button clicked");
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
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
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbols}</span>
        </span>
        <button onClick={handleEditButton}>{btnCaption}</button>
      </li>
    </>
  );
}
