import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function Progress({ question, questionsData, points }) {
  return (
    <div className="text-cyan-200 flex flex-col items-center px-5">
      <p className="pb-2 text-xl">
        <span className="font-bold font-tourney">{question.id}</span> from{" "}
        <span className="font-bold font-tourney">{questionsData.length}</span>
      </p>
      <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden shadow-sm shadow-gray-500">
        <div
          className="h-full transition-colors duration-1000 ease-in-out"
          style={{
            backgroundColor: generateRedToGreenColor(
              question.id,
              questionsData.length
            ),
            width: `${(question.id / questionsData.length) * 100}%`,
          }}
        ></div>
        <div
          className="h-full bg-cyan-200"
          style={{
            width: `${100 - (question.id / questionsData.length) * 100}%`,
          }}
        ></div>
      </div>
      <p className="pt-2 text-xl">
        Your score: <span className="font-bold font-tourney">{points}</span>
      </p>
    </div>
  );
}
