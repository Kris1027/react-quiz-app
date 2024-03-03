const sql = require("better-sqlite3");
const db = sql("questions.db");

const data = [
  {
    question: "What is the main purpose of ReactJS?",
    correct_option: 1,
    points: 10,
  },
  {
    question: "Which of the following is not a core concept of ReactJS?",
    correct_option: 4,
    points: 15,
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        correct_option INTEGER NOT NULL,
        points INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO questions VALUES (
        null,
        @question,
        @correct_option,
        @points
    )
    `);

  for (const question of data) {
    stmt.run(question);
  }
}

initData();
