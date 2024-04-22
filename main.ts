#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 100000;
let myPincode = 2233;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "please enter your pin code...",
  },
]);
if (pinAnswer.pin == myPincode) {
  console.log("correct pincode");

  let accountQues = await inquirer.prompt([
    {
      name: "accountType",
      type: "list",
      message: "please select the account type",
      choices: ["current", "saving"],
    },
  ]);
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "please choose the following option",
      choices: ["with draw", "check balance", "fast cash"],
    },
  ]);

  if (operationAns.operation === "with draw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "please enter your amount",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log("your remaining balance is :" + myBalance);
    }
  } else if (operationAns.operation === "fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: "please choose the following option",
        choices: ["500", "1000", "5000", "10000"],
      },
    ]);
    if (fastCashAns.amount < myBalance) {
      myBalance -= fastCashAns.amount;
      console.log("your remaining balance is :" + myBalance);
    } else {
      console.log("insufficient balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log("your  balance is :" + myBalance);
  }
} else {
  console.log("incorrect pincode");
}
