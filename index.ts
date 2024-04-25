#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000;
const myPin = 12345;

// Print welcome message
console.log("Welcome to Code with Ariba - ATM Machine");

let pinAnswer= await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your PIN code:",
    }
])
 if (pinAnswer.pin === myBalance) {
     console.log("PIN is Correct, Login Successfully!");
   console.log(`Current Account Balance is ${myPin}.`
     )
}

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select on operator:",
        choices: ["WithDraw Amount", "Check Balance"]
    }
])

if(operationAns.operator  === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw: "
        }
    ])

if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
}
else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw Successfully`);
    console.log(`Your Remaining Balance is: ${myBalance}`)
  }
}
else if(operationAns.operation === "Check Balance"){
    console.log(`Your account Balance is: ${myBalance}`);
}
else{
    console.log("Pin is Incorrect, Try Again!");
}