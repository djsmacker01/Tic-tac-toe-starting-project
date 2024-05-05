import { useState } from "react";
export default function DemoPlayer({ initialName, symbols }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    console.log("button clicked");
    setIsEditing(true);
  }

  let playerName = <span className="player-name"> {initialName}</span>;
  if (isEditing) {
    playerName = <input type="text" />;
  }

  return (
    <>
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbols}</span>
        </span>
        <button onClick={handleEditButton}>Edit</button>
      </li>
    </>
  );
}
