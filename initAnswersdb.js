const sql = require("better-sqlite3");
const db = sql("answers.db");

const data = [
  {
    question_id: 1,
    answer: "To create a dynamic and interactive web application",
    answer_id: 1,
  },
  {
    question_id: 1,
    answer: "To style web pages",
    answer_id: 2,
  },
  {
    question_id: 1,
    answer: "To create server-side applications",
    answer_id: 3,
  },
  {
    question_id: 1,
    answer: "To create mobile applications",
    answer_id: 4,
  },
  {
    question_id: 2,
    answer: "Components",
    answer_id: 1,
  },
  {
    question_id: 2,
    answer: "State",
    answer_id: 2,
  },
  {
    question_id: 2,
    answer: "Props",
    answer_id: 3,
  },
  {
    question_id: 2,
    answer: "Classes",
    answer_id: 4,
  },
];

db.prepare(
  `
      CREATE TABLE IF NOT EXISTS answers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          question_id INTEGER NOT NULL,
          answer TEXT NOT NULL,
          answer_id INTEGER NOT NULL
      )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO answers VALUES (
          null,
          @question_id,
          @answer,
          @answer_id
      )
      `);

  for (const answer of data) {
    stmt.run(answer);
  }
}

initData();
