#! usr/bin/env node
import inquirer from "inquirer";
interface Quiz {
  Question_1: string;
  Question_2: string;
  Question_3: string;
  Question_4: string;
  Question_5: string;
}

async function run_quiz() {
  const quiz: Quiz = await inquirer.prompt([
    {
      name: "Question_1",
      type: "list",
      message: " 1. What is TypeScript primarily used for?",
      choices: [
        "A. Memory Management",
        "B. Dynamic Typing",
        "C. Static Typing",
        "D. Asynchronous operations",
      ],
    },
    {
      name: "Question_2",
      type: "list",
      message:
        "2. Which of the following is NOT a valid TypeScript data type? ",
      choices: ["A. void", "B. any", "C. dynamic", "D. tuple"],
    },
    {
      name: "Question_3",
      type: "list",
      message: "3.How do you denote a variable as readonly in TypeScript? ",
      choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
    },
    {
      name: "Question_4",
      type: "list",
      message: "4. How do you define a custom type in TypeScript? ",
      choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"],
    },
    {
      name: "Question_5",
      type: "list",
      message:
        "5. How do you specify that a function does not return anything in TypeScript? ",
      choices: [
        "A. function myFunc(): undefined",
        "B. function myFunc(): void",
        "C. function myFunc(): null",
        "D. function myFunc(): None",
      ],
    },
  ]);

  let score = 0;

  switch (quiz.Question_1) {
    case "C. Static Typing":
      console.log("1.Correct");
      ++score;
      break;
    default:
      console.log("1.Incorrect");
  }
  switch (quiz.Question_2) {
    case "C. dynamic":
      console.log("2.Correct");
      ++score;
      break;
    default:
      console.log("2.Incorrect");
  }
  switch (quiz.Question_3) {
    case "C. readonly":
      console.log("3.Correct");
      ++score;
      break;
    default:
      console.log("3.Incorrect");
  }
  switch (quiz.Question_4) {
    case "D. Both A and C":
      console.log("4.Correct");
      ++score;
      break;
    default:
      console.log("4.Incorrect");
  }
  switch (quiz.Question_5) {
    case "B. function myFunc(): void":
      console.log("5.Correct");
      ++score;
      break;
    default:
      console.log("5.Incorrect");
  }
  console.log("Total score", score);
}
run_quiz();
