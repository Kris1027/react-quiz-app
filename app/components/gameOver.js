import { useStateValue } from "../contexts/useReducer";
import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function GameOver({ totalPoints }) {
  const { points, timeLeft } = useStateValue();

  return (
    <h1 className="text-5xl text-[var(--primaryText)] text-center font-tourney">
      {timeLeft === 0 ? (
        <>
          <p>Game Over</p>
          <p>Time is up!</p>
          <p>
            Your score:{" "}
            <span
              style={{ color: generateRedToGreenColor(points, totalPoints) }}
              className="font-bold"
            >
              {points}
            </span>
          </p>
        </>
      ) : (
        <>
          <p>Game Over</p>
          <p>
            Your score:{" "}
            <span
              style={{ color: generateRedToGreenColor(points, totalPoints) }}
              className="font-bold"
            >
              {points}
            </span>
          </p>
        </>
      )}
    </h1>
  );
}
