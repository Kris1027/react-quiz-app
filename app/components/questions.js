export default function Question({
  question,
  answerA,
  answerB,
  answerC,
  answerD,
  dispatch,
}) {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answerA}</p>
      <p>{answerB}</p>
      <p>{answerC}</p>
      <p>{answerD}</p>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </div>
  );
}
