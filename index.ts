#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    name: "operators",
  },
]);
if (answer.operators === "Addition") {
  console.log(`Your answer is : ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operators === "Subtraction") {
  console.log(`Your answer is : ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operators === "Multiplication") {
  console.log(`Your answer is : ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operators === "Division") {
  console.log(`Your answer is : ${answer.firstNumber / answer.secondNumber}`);
} else {
  console.log("Please select valid operator");
}
