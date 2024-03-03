export function QuestionItem({ question, answer, dispatch }) {
  return (
    <>
      <h2 className="text-3xl p-5">{question}</h2>
      <div className="flex flex-col gap-4">
        {answer.map((a) => (
          <button className=" bg-red-950 text-red-200 p-2" key={a.id}>
            {a.answer}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </>
  );
}
