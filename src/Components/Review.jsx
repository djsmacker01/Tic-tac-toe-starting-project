export default function Review({ feedback, studentName }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{studentName}</figcaption>
    </figure>
  );
}
