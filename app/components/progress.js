import { generateRedToGreenColor } from "../utils/generateRedToGreenColor";

export default function Progress({ question, questionsData, points }) {
  return (
    <div className="text-cyan-200 flex flex-col items-center px-5">
      <p className="pb-2 text-xl">
        {question.id} from {questionsData.length}
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
      <p className="pt-2 text-xl">Your score: {points}</p>
    </div>
  );
}
