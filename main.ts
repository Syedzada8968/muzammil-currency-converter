#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t Welcome to 'CODE-WITH-MUZAMMIL' - Currency Converter\n"));

//Define the list of currencies and there exchange rates
let exchange_rate: any = {
   "USD": 1, //Base currency
   "EUR": 0.9, //European Currency
   "JYP": 113, //Japanese currency
   "CAD": 1.3, //Canadian currency
   "AUD": 1.65, // Austrailian currency
   "PKR": 277.70, // Pakistan Currency
   // Add more currencies and their exchange rates here
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
      name: "from_currency",
      type: "list",
      message: "Select the currency to convert from",
      choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of currency conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);