
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter The First Number", type: "number", name: "firstNumber" },
  { message: "Enter The Second Number", type: "number", name: "secondNumber" },
  {
    message: "select the one operator",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "Subtrection",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus",
      "BMI",
    ],
  },
]);
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtrection") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === "Exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operators === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operators === "BMI") {
  console.log(answer.firstNumber / (answer.secondNumber * answer.secondNumber));
} else {
  console.log("Please Select Valid Operaters");
}
