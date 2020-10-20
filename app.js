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
const { createReadStream } = require("fs");


//Array 
let employees = [];


//Adding Manager
function addManager() {
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
        type: "input",
        message: "What is your office number",
        name: "officeNo"
      }

    ]).then(res => {
      const manager = new Manager(res.name, res.userId, res.email, res.officeNo);
      employees.push(manager);
      addTeam();
    });
}


//Adding Engineer
function addEngineer() {
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
        type: "input",
        message: "What is your github username",
        name: "github"
      }

    ]).then(res => {
      const engineer = new Engineer(res.name, res.userId, res.email, res.github);
      employees.push(engineer);
      addTeam();
    });
}


//Adding Intern
function addIntern() {
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
        type: "input",
        message: "What is your school?",
        name: "school"
      }

    ]).then(res => {
      const intern = new Intern(res.name, res.userId, res.email, res.school);
      employees.push(intern);
      addTeam();
    });
}





//Creating html 
function createTeam() {
  fs.writeFileSync(outputPath, render(employees), "utf-8");
}



//Adding a Team Member
function addTeam() {
  inquirer.prompt([
    {
      type: "list",
      message: "What team member you want to add?",
      name: "role",
      choices: [
        "Engineer",
        "Intern",
        "No team member anymore"
      ]
    }
  ]).then(answer => {
    if (answer.role === "Engineer") {
      addEngineer();
    }

    if (answer.role === "Intern") {
      addIntern();
    }

    if (answer.role === "No team member anymore") {
      createTeam();
    }
  })
}

// }



//Initialization of app - Calling the questions
addManager();





