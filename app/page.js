import { Start } from "./components/start";
import { getQuestions } from "./lib/getQuestions";
import { getAnswers } from "./lib/getAnswers";

export default async function Home() {
  const questionsData = await getQuestions();
  const answersData = await getAnswers();

  return (
    <main>
      {questionsData && answersData && (
        <Start questionsData={questionsData} answersData={answersData} />
      )}
    </main>
  );
}
