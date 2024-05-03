export default function DemoPlayer({ initialName, symbols }) {
  return (
    <>
      <li>
        <span className="player">
          <span> {initialName}</span>
          <span className="player-symbol">{symbols}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  );
}
