export default function DemoPlayer({ initialName, symbols }) {
  return (
    <>
      <li>
        <span className="player">
          <span> {initialName}</span>
          <span>{symbols}</span>
        </span>
        <button>Edit</button>
      </li>
    </>
  );
}
