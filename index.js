const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

function addManager() {
    console.log("Start building your team profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid office number.";
            }
        },
    ]); //add .then to push answers to manager and addTeam()
}

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What kind of team member would you like to add next?",
            choices: [
                "Engineer",
                "Intern, or",
                "End application"
            ]
        }
    ]); //add function to add or end and generate HTML
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Engineer's name.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's GitHub username.";
            }
        },
    ]); //write .then to push answers to engineer. add addTeam() function for menu to popup
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's name.";
            }  
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern attend school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a proper school.";
            }
        },
    ]);//write .then to push answers to intern. add addTeam() function for menu to popup
}

//Write function to generate HTML.