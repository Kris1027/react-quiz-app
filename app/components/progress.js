export default function Progress({ question, questionsData, points }) {
  function handleGenerateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  }

  return (
    <div className="text-cyan-200 flex flex-col items-center px-5">
      <p className="pb-2 text-xl">
        {question.id} from {questionsData.length}
      </p>
      <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden shadow-sm shadow-gray-500">
        <div
          className="h-full"
          style={{
            backgroundColor: handleGenerateHexColor(),
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
