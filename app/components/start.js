"use client";
import StartPage from "../views/startPage";
import { QuizOnPage } from "../views/quizOnPage";
import { useStateValue } from "../contexts/useReducer";

export function Start({ questionsData, answersData }) {
  const { start, currentQuestion } = useStateValue();
  const question = questionsData[currentQuestion - 1];
  const answer = answersData.filter((a) => a.question_id === currentQuestion);

  const totalPoints = answersData
    .map((a) => a.points)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      {!start && <StartPage />}
      {start && (
        <QuizOnPage
          question={question}
          questionsData={questionsData}
          answer={answer}
          totalPoints={totalPoints}
        />
      )}
    </>
  );
}
