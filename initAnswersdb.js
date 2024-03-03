const sql = require("better-sqlite3");
const db = sql("answers.db");

const data = [
  {
    question_id: 1,
    answer: "To create a dynamic and interactive web application",
  },
  {
    question_id: 1,
    answer: "To style web pages",
  },
  {
    question_id: 1,
    answer: "To create server-side applications",
  },
  {
    question_id: 1,
    answer: "To create mobile applications",
  },
  {
    question_id: 2,
    answer: "Components",
  },
  {
    question_id: 2,
    answer: "State",
  },
  {
    question_id: 2,
    answer: "Props",
  },
  {
    question_id: 2,
    answer: "Classes",
  },
];

db.prepare(
  `
      CREATE TABLE IF NOT EXISTS answers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          question_id INTEGER NOT NULL,
          answer TEXT NOT NULL
      )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO answers VALUES (
          null,
          @question_id,
          @answer
      )
      `);

  for (const answer of data) {
    stmt.run(answer);
  }
}

initData();
