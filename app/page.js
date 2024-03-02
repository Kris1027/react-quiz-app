import { getQuestions } from "./lib/getQuestions";

export default async function Home() {
  const data = await getQuestions();

  console.log(data);

  return (
    <main>
      {data.map((question) => (
        <div key={question.id}>
          <h1>{question.question}</h1>
          <p>{question.answer_a}</p>
          <p>{question.answer_b}</p>
          <p>{question.answer_c}</p>
          <p>{question.answer_d}</p>
        </div>
      ))}
    </main>
  );
}
