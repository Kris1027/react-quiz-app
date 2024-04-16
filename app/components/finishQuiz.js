import Image from "next/image";
import { Button } from "../ui/button";
import FinishImg from "@/public/finish.svg";

export function FinishQuiz({ points, dispatch }) {
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
        Your score is <span className="font-bold">{points}</span>!
      </p>
      <Button onClick={() => dispatch({ type: "reset" })}>Start again</Button>
    </div>
  );
}
