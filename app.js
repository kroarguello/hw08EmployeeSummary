const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Aray and Object where is each team member
let employees = [];

let objEmployee = {
  length: 0,
  addElem: function addElem(elem) {
    [].push.call(this, elem)

  }
}

const role = ["Manager",
  "Engineer",
  "Intern"
];

//Asking if is a Manager 
function manager() {
  inquirer
    .prompt(

      {
        type: "list",
        message: "Are you a Manager ?",
        name: "value",
        choices: ["yes", "no"]

      })
    .then(answer => {

      if (answer.value == "yes") {
        console.log("Please start adding yourself and your  team");
        questionEmployee();
      }
      else {
        console.log("You need to be a manager for adding employees");
      }
    });

}

//Making general questions
function questionEmployee() {

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your Id",
        name: "userId"
      },
      {
        type: "input",
        message: "What is your email",
        name: "email"
      },
      {
        type: "list",
        message: "What is your title?",
        name: "role",
        choices: [
          role[0],
          role[1],
          role[2]
        ]
      }

    ])

    .then(answer => {
      employees = [answer.name, answer.userId, answer.email, answer.role];

      //Get the role depending what was choose

      let messageR = "";
      if (answer.role == "Manager") {
        messageR = "What is your Office Phone number?";
      }
      else if (answer.role == "Engineer") {
        messageR = "What is you Github user?";
      }
      else {
        messageR = "What is your School";
      }

      inquirer.prompt([
        {
          type: "input",
          message: messageR,
          name: "extraInfo"
        },
        {
          type: "list",
          message: "Would you like add one more Team",
          name: "moreTeam",
          choices: ["Yes", "No"]
        }
      ])
        .then(answer => { // adding more than one team

          employees.push(answer.extraInfo);


          objEmployee.addElem({ employees });
          //  console.log(objEmployee.length);
         // console.log(objEmployee);

          if (answer.moreTeam == "Yes") {
            //Adding more team       
            questionEmployee();
          }
          else {
            console.log("Thank you , here is you Team Members");
            console.log(objEmployee);
            console.log(objEmployee.length);
            //render();//Calling render function 
          }
        })



    })


}



//Initialization of app - Calling the questions
manager();







// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
