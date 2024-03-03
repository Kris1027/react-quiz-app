import { Start } from "./components/start";
import { getQuestions } from "./lib/getQuestions";

export default async function Home() {
  const quizData = await getQuestions();

  return <main>{quizData && <Start quizData={quizData} />}</main>;
}
