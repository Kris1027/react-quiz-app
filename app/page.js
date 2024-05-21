import { Start } from "./components/start";
import { getQuestions } from "./lib/getQuestions";
import { getAnswers } from "./lib/getAnswers";
import Wrapper from "./ui/wrapper";

export default async function Home() {
  const questionsData = await getQuestions();
  const answersData = await getAnswers();

  return (
    <>
      {questionsData && answersData && (
        <Start questionsData={questionsData} answersData={answersData} />
      )}
    </>
  );
}
