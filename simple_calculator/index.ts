import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter The First Number", type: "number", name: "FirstNumber" },
  { message: "Enter The Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select the one oparetor of them to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divion"],
  },
]);
if (answer.Operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);  
}
else if (answer.Operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);  
}
else if (answer.Operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);  
}
else {
  console.log("Please Enter Valid Valu and Operater");
}
