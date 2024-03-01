import { getQuestions } from "@/lib/questions";

export default async function Home() {
  const questions = await getQuestions();

  console.log(questions);

  return <main>start</main>;
}
