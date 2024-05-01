import * as crypto from "crypto";
import inquirer from "inquirer";
let name = "Rue";
const hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash);
inquirer
  .prompt([
    {name:'name',
    message:'Name:'}
  ])
  .then((answers) => {
    console.log(answers.name);
    const name2 = crypto.createHash('sha256').update(answers.name).digest('hex');
    console.log(name2);
    if (hash === name2){
        console.log("Matched!");
    }else{
        console.log("Not Matched!");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
