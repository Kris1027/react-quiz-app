import sql from "better-sqlite3";
const db = sql("answers.db");

export async function getAnswers() {
  return db.prepare("SELECT * FROM answers").all();
}
