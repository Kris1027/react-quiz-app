import { Button } from "../ui/button";

export function FinishQuiz({ points, dispatch }) {
  return (
    <div>
      <h1>Finish</h1>
      <p>Your score is {points}</p>
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </div>
  );
}
