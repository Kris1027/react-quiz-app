import AnswerItem from "./answerItem";

export default function AnswersList({
  answer,
  question,
  userAnswer,
  hasAnswered,
  dispatch,
}) {
  return (
    <div className="grid grid-rows-4 gap-4 px-10">
      {answer.map((item) => (
        <AnswerItem
          item={item}
          question={question}
          userAnswer={userAnswer}
          hasAnswered={hasAnswered}
          dispatch={dispatch}
          key={`${question.id}-${item.answer_id}`}
        />
      ))}
    </div>
  );
}
