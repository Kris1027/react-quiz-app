"use client";

import { useStateValue } from "../contexts/useReducer";
import QuizOnPage from "../views/quizOnPage";
import StartPage from "../views/startPage";

export default function AppLayout({ questionsData, answersData }) {
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
          answer={answer}
          totalPoints={totalPoints}
          questionsData={questionsData}
        />
      )}
    </>
  );
}
