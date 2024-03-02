import sql from "better-sqlite3";
const db = sql("quiz.db");

const data = [
  {
    question: "What is the main purpose of ReactJS?",
    answer_a: "To create a dynamic and interactive web application",
    answer_b: "To style web pages",
    answer_c: "To create server-side applications",
    answer_d: "To create mobile applications",
    correct_option: 1,
    points: 10,
  },
  {
    question: "Which of the following is not a core concept of ReactJS?",
    answer_a: "Components",
    answer_b: "State",
    answer_c: "Props",
    answer_d: "Classes",
    correct_option: 4,
    points: 10,
  },
  {
    question: "What is JSX?",
    answer_a: "A programming language",
    answer_b: "A templating language",
    answer_c: "A markup language",
    answer_d: "A styling language",
    correct_option: 2,
    points: 15,
  },
  {
    question:
      "What is the difference between a class component and functional component?",
    answer_a: "Class components use props, while functional components do not",
    answer_b:
      "Functional components are always stateless, while class components can be stateful",
    answer_c:
      "Class components use the this keyword, while functional components do not",
    answer_d: "All of the above",
    correct_option: 2,
    points: 15,
  },
  {
    question: "What is the render() method in a React component?",
    answer_a: "It is used to update the state of the component",
    answer_b: "It is used to style the component",
    answer_c: "It is used to create a new component",
    answer_d: "It is used to return the HTML of the component",
    correct_option: 4,
    points: 15,
  },
  {
    question: "What is the setState() method in a React component?",
    answer_a: "It is used to update the state of the component",
    answer_b: "It is used to style the component",
    answer_c: "It is used to create a new component",
    answer_d: "It is used to return the HTML of the component",
    correct_option: 1,
    points: 20,
  },
  {
    question: "What are props in ReactJS?",
    answer_a:
      "They are variables that are passed from a parent component to a child component",
    answer_b: "They are variables that are defined in the state of a component",
    answer_c: "They are variables that are used to style a component",
    answer_d: "They are variables that are used to create a new component",
    correct_option: 1,
    points: 20,
  },
  {
    question: "What is the difference between props and state in ReactJS?",
    answer_a:
      "Props are passed from a parent component to a child component, while state is defined within the component",
    answer_b: "Props are immutable, while state is mutable",
    answer_c: "Props can be used to style a component, while state cannot",
    answer_d: "All of the above",
    correct_option: 4,
    points: 25,
  },
  {
    question: "What is the useEffect() hook in ReactJS?",
    answer_a: "It is used to update the state of the component",
    answer_b: "It is used to style the component",
    answer_c: "It is used to create a new component",
    answer_d: "It is used to run a side effect in a component",
    correct_option: 4,
    points: 25,
  },
  {
    question: "What is the useContext() hook in ReactJS?",
    answer_a: "It is used to update the state of the component",
    answer_b: "It is used to style the component",
    answer_c: "It is used to create a new component",
    answer_d: "It is used to access context from a component",
    correct_option: 4,
    points: 30,
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        answer_a TEXT NOT NULL,
        answer_b TEXT NOT NULL,
        answer_c TEXT NOT NULL,
        answer_d TEXT NOT NULL,
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
        @answer_a,
        @answer_b,
        @answer_c,
        @answer_d,
        @correct_option,
        @points
    )
    `);

  for (const question of data) {
    stmt.run(question);
  }
}

initData();
