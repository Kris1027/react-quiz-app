import { getQuestions } from "./lib/getQuestions";
import { getAnswers } from "./lib/getAnswers";
import AppLayout from "./components/appLayout";

export default async function Home() {
  const questionsData = await getQuestions();
  const answersData = await getAnswers();

  return (
    <>
      {questionsData && answersData && (
        <AppLayout questionsData={questionsData} answersData={answersData} />
      )}
    </>
  );
}
