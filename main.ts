import inquirer from "inquirer";
import chalk from "chalk";

// initialize user balance and pin code
let myBalance = 5000;
let myPin = 2345;

// print wellcome message
console.log(chalk.yellow("\n \tWellcome to My ATM machine\n "));

let pinAmswer = await inquirer.prompt([
{
    name: "pin",
    type: "number",
    message: chalk.green("Enter your pin code:")
}
])
if(pinAmswer.pin === myPin){
    console.log(chalk.red("\n pin is Correct, Login succssfully!\n "));
    //  console.log(`Current  Account balance is ${myBalance}`)

 let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount","Deposit","Check Balance"]
        }    
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let WithdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash","Enter Amount"]
            }
        ])
    if(WithdrawAns.withdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type:"list",
                message: " Select Amount",
                choices: [1000,2000,3000,4000]
            }
        ])
        if(fastCashAns.fastCash > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= fastCashAns.fastCash
            console.log(chalk.green(`\n ${fastCashAns.fastCash} withdraw Successfully\n `));
            console.log(chalk.grey(`Your Remming Balancr is: ${myBalance}`));
        }
    }
    else if(WithdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw:"
                }
            ]) 
            if(amountAns.amount > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your Remining Balance is: ${myBalance}`);
            }
        }
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw:"
            }
        ]) 
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remining Balance is: ${myBalance}`);
        }
     }
     else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
     }  
}
else{
    console.log("Pin is Incorrrect, Try Again!");
}

    
