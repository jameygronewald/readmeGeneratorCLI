const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

console.log(generateMarkdown());

// array of questions for user
const questions = [
    'What is your full name?',
    'What is your GitHub username?',
    'What is your email?',
    'What is the title of your project (this will also be the name of your repo)?',
    'Please enter a description for your project:',
    'How can a user install your application?',
    'How is your application used?',
    'List full names of any other contributors:',
    'How are tests run in your application?',
    'What license would you like to use for your project?'
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();