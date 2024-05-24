import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function FinishScore({
  points,
  totalPoints,
  good,
  medium,
  bad,
  none,
}) {
  return (
    <p className="text-2xl text-cyan-100 text-center pb-10">
      {good && (
        <span style={{ color: generateRedToGreenColor(points, totalPoints) }}>
          Perfect! You have earned <span className="font-bold">{points}</span>{" "}
          points from <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
      {medium && (
        <span style={{ color: generateRedToGreenColor(points, totalPoints) }}>
          Not bad! You have earned <span className="font-bold">{points}</span>{" "}
          points from <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
      {bad && (
        <span style={{ color: generateRedToGreenColor(points, totalPoints) }}>
          You need to work more... You have earned only{" "}
          <span className="font-bold">{points}</span> points from{" "}
          <span className="font-bold">{totalPoints}</span> total!
        </span>
      )}
      {none && (
        <span style={{ color: generateRedToGreenColor(points, totalPoints) }}>
          What are you doing? All question are wrong...
        </span>
      )}
    </p>
  );
}
