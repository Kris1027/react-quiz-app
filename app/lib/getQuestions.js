import sql from "better-sqlite3";
const db = sql("questions.db");

export async function getQuestions() {
  return db.prepare("SELECT * FROM questions").all();
}
