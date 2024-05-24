const sql = require("better-sqlite3");
const db = sql("questions.db");

const data = [
  {
    question_id: 1,
    question: "What is the main purpose of ReactJS?",
    correct_option: 1,
  },
  {
    question_id: 2,
    question: "Which of the following is not a core concept of ReactJS?",
    correct_option: 4,
  },
  {
    question_id: 3,
    question: "What is JSX?",
    correct_option: 1,
  },
  {
    question_id: 4,
    question: "How do you create a component in React?",
    correct_option: 3,
  },
  {
    question_id: 5,
    question: "What is the use of useState in React?",
    correct_option: 2,
  },
  {
    question_id: 6,
    question: "What is the Virtual DOM?",
    correct_option: 1,
  },
  {
    question_id: 7,
    question: "How can you pass data from a parent to a child component?",
    correct_option: 3,
  },
  {
    question_id: 8,
    question: "What is the purpose of useEffect in React?",
    correct_option: 2,
  },
  {
    question_id: 9,
    question: "Which method is used to update the state in a class component?",
    correct_option: 1,
  },
  {
    question_id: 10,
    question: "How do you handle events in React?",
    correct_option: 4,
  },
  {
    question_id: 11,
    question: "What is the Context API?",
    correct_option: 3,
  },
  {
    question_id: 12,
    question: "What is Prop Drilling?",
    correct_option: 2,
  },
  {
    question_id: 13,
    question: "How do you optimize performance in a React application?",
    correct_option: 1,
  },
  {
    question_id: 14,
    question: "What is a Higher-Order Component (HOC)?",
    correct_option: 4,
  },
  {
    question_id: 15,
    question: "How do you fetch data in a React component?",
    correct_option: 3,
  },
  {
    question_id: 16,
    question: "What is React Router?",
    correct_option: 1,
  },
  {
    question_id: 17,
    question: "How do you manage global state in a React application?",
    correct_option: 4,
  },
  {
    question_id: 18,
    question: "What is the difference between state and props?",
    correct_option: 2,
  },
  {
    question_id: 19,
    question: "How do you create a functional component in React?",
    correct_option: 3,
  },
  {
    question_id: 20,
    question: "What is the purpose of keys in React?",
    correct_option: 1,
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        correct_option INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO questions VALUES (
        null,
        @question,
        @correct_option
    )
    `);

  for (const question of data) {
    stmt.run(question);
  }
}

initData();
