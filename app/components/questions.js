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
      <h2 className="flex justify-center">{question}</h2>
      <div className="flex flex-col">
        <button>{answerA}</button>
        <button>{answerB}</button>
        <button>{answerC}</button>
        <button>{answerD}</button>
      </div>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </div>
  );
}
