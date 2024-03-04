export function FinishQuiz({ points, dispatch }) {
  return (
    <div>
      <h1>Finish</h1>
      <p>Your score is {points}</p>
      <button onClick={() => dispatch({ type: "reset" })}>Start again</button>
    </div>
  );
}
