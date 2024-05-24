import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function GameOver({ points, totalPoints, timeLeft }) {
  return (
    <h1 className="text-5xl text-cyan-200 text-center font-tourney">
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