import sql from "better-sqlite3";
// create a connection to the database
const db = sql("quiz.db");

export async function getQuestions() {
  // 2 seconds delay to simulate a slow network
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // function to get all questions from the database
  return db.prepare("SELECT * FROM questions").all();
}
