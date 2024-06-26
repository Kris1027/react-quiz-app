import AnswerItem from "./answerItem";

export default function AnswersList({ answer, question }) {
  return (
    <div className="grid grid-rows-4 gap-4 px-8 lg:px-12">
      {answer.map((item) => (
        <AnswerItem
          item={item}
          answer={answer}
          question={question}
          key={`${question.id}-${item.answer_id}`}
        />
      ))}
    </div>
  );
}
