import Image from "next/image";
import { Button } from "../ui/button";
import FinishImg from "@/public/finish.svg";

export function FinishQuiz({ points, dispatch, totalPoints }) {
  const good = points >= totalPoints * 0.8;
  const medium = points >= totalPoints * 0.6 && points < totalPoints * 0.8;
  const bad = points < totalPoints * 0.6;

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-7xl font-extrabold text-cyan-100 text-center pb-10">
        Finish!
      </h1>
      <div className="bounce-in-right">
        <Image
          src={FinishImg}
          alt="finish flag"
          className="flash"
          width={400}
          height={400}
        />
      </div>
      <p className="text-3xl text-cyan-100 pt-20">
        {good && (
          <span className="text-green-500">
            Perfect! You have earned <span className="font-bold">{points}</span>{" "}
            points from <span className="font-bold">{totalPoints}</span> total!
          </span>
        )}
        {medium && (
          <span className="text-amber-400">
            Not bad! You have earned <span className="font-bold">{points}</span>{" "}
            points from <span className="font-bold">{totalPoints}</span> total!
          </span>
        )}
        {bad && (
          <span className="text-red-500">
            You need to work more... You have earned only{" "}
            <span className="font-bold">{points}</span> points from{" "}
            <span className="font-bold">{totalPoints}</span> total!
          </span>
        )}
      </p>
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </div>
  );
}
