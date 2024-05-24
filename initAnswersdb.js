const sql = require("better-sqlite3");
const db = sql("answers.db");

const data = [
  {
    question_id: 1,
    answer: "To create a dynamic and interactive web application",
    answer_id: 1,
    points: 10,
  },
  {
    question_id: 1,
    answer: "To style web pages",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 1,
    answer: "To create server-side applications",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 1,
    answer: "To create mobile applications",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 2,
    answer: "Components",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 2,
    answer: "State",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 2,
    answer: "Props",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 2,
    answer: "Classes",
    answer_id: 4,
    points: 15,
  },
  {
    question_id: 3,
    answer: "A syntax extension that allows mixing HTML with JavaScript",
    answer_id: 1,
    points: 10,
  },
  {
    question_id: 3,
    answer: "A JavaScript function",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 3,
    answer: "A library for handling forms",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 3,
    answer: "A style sheet language",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 4,
    answer: "By using a function",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 4,
    answer: "By using an HTML file",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 4,
    answer: "By using a class or a function",
    answer_id: 3,
    points: 15,
  },
  {
    question_id: 4,
    answer: "By using a JavaScript object",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 5,
    answer: "To fetch data from an API",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 5,
    answer: "To add state to a functional component",
    answer_id: 2,
    points: 15,
  },
  {
    question_id: 5,
    answer: "To perform side effects in a component",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 5,
    answer: "To pass props to child components",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 6,
    answer: "An actual copy of the DOM",
    answer_id: 1,
    points: 10,
  },
  {
    question_id: 6,
    answer: "A smaller version of the real DOM",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 6,
    answer: "A way to handle asynchronous operations",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 6,
    answer: "A technique for updating the UI directly",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 7,
    answer: "Using a global variable",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 7,
    answer: "Using context",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 7,
    answer: "Using props",
    answer_id: 3,
    points: 15,
  },
  {
    question_id: 7,
    answer: "Using state",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 8,
    answer: "To define the initial state of a component",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 8,
    answer: "To perform side effects in a component",
    answer_id: 2,
    points: 15,
  },
  {
    question_id: 8,
    answer: "To handle user input",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 8,
    answer: "To manage component styles",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 9,
    answer: "setState",
    answer_id: 1,
    points: 15,
  },
  {
    question_id: 9,
    answer: "useState",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 9,
    answer: "updateState",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 9,
    answer: "changeState",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 10,
    answer: "By adding event listeners directly to the DOM elements",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 10,
    answer: "By using jQuery",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 10,
    answer: "By using the addEventListener method",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 10,
    answer: "By passing a function as a prop to the element",
    answer_id: 4,
    points: 10,
  },
  {
    question_id: 11,
    answer: "A way to manage state in a functional component",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 11,
    answer: "A method to fetch data from an API",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 11,
    answer: "A way to manage global state in a React application",
    answer_id: 3,
    points: 15,
  },
  {
    question_id: 11,
    answer: "A way to handle component lifecycle events",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 12,
    answer: "Passing data from a child component to a parent component",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 12,
    answer: "Passing data through many nested components",
    answer_id: 2,
    points: 15,
  },
  {
    question_id: 12,
    answer: "Passing data from one sibling component to another",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 12,
    answer: "Passing data using context",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 13,
    answer: "By using memoization and avoiding unnecessary re-renders",
    answer_id: 1,
    points: 15,
  },
  {
    question_id: 13,
    answer: "By using class components instead of functional components",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 13,
    answer: "By using global variables",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 13,
    answer: "By avoiding the use of state",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 14,
    answer: "A function that returns another function",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 14,
    answer: "A component that handles lifecycle methods",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 14,
    answer: "A method to fetch data from an API",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 14,
    answer: "A function that takes a component and returns a new component",
    answer_id: 4,
    points: 15,
  },
  {
    question_id: 15,
    answer: "Using the fetch API or libraries like Axios",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 15,
    answer: "Using a global variable",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 15,
    answer: "Using the useEffect hook",
    answer_id: 3,
    points: 10,
  },
  {
    question_id: 15,
    answer: "Using the useState hook",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 16,
    answer: "A library for routing in React applications",
    answer_id: 1,
    points: 10,
  },
  {
    question_id: 16,
    answer: "A tool for state management",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 16,
    answer: "A method to handle events in React",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 16,
    answer: "A way to fetch data from an API",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 17,
    answer: "Using global variables",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 17,
    answer: "Using class components",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 17,
    answer: "Using the useState hook",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 17,
    answer: "Using the Context API or state management libraries like Redux",
    answer_id: 4,
    points: 10,
  },
  {
    question_id: 18,
    answer:
      "State is used to pass data to child components, props are used to manage local state",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 18,
    answer:
      "State is a local data storage that is mutable, props are immutable and passed from parent to child",
    answer_id: 2,
    points: 10,
  },
  {
    question_id: 18,
    answer: "State is a JavaScript object, props are a function",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 18,
    answer: "State is used for styling, props are used for logic",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 19,
    answer: "By using a class",
    answer_id: 1,
    points: 0,
  },
  {
    question_id: 19,
    answer: "By using a method",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 19,
    answer: "By using a function",
    answer_id: 3,
    points: 10,
  },
  {
    question_id: 19,
    answer: "By using an array",
    answer_id: 4,
    points: 0,
  },
  {
    question_id: 20,
    answer: "To identify unique elements for rendering",
    answer_id: 1,
    points: 10,
  },
  {
    question_id: 20,
    answer: "To handle events",
    answer_id: 2,
    points: 0,
  },
  {
    question_id: 20,
    answer: "To fetch data",
    answer_id: 3,
    points: 0,
  },
  {
    question_id: 20,
    answer: "To manage state",
    answer_id: 4,
    points: 0,
  },
];

db.prepare(
  `
      CREATE TABLE IF NOT EXISTS answers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          question_id INTEGER NOT NULL,
          answer TEXT NOT NULL,
          answer_id INTEGER NOT NULL,
          points INTEGER DEFAULT 0
      )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO answers VALUES (
          null,
          @question_id,
          @answer,
          @answer_id,
          @points
      )
      `);

  for (const answer of data) {
    stmt.run(answer);
  }
}

initData();
