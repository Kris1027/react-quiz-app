export default function QuestionItem({ question }) {
  return (
    <div className="w-full min-h-20 p-5">
      <h1 className="text-lg lg:text-xl text-center font-bold text-[var(--primaryText)]">
        {question.question}
      </h1>
    </div>
  );
}
