export default function DemoPlayer({ initialName, symbols }) {
  return (
    <>
      <li>
        <span className="player">
          <span className="player-name"> {initialName}</span>
          <span className="player-symbol">{symbols}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  );
}
