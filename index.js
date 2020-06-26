const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


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
    // use fs package
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) throw error;
        else console.log('Success!');
    });
};

// function to initialize program
function init() {
    // use inquirer package
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitName'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description for your project:',
            name: 'description'
        }
    ]).then(userData => writeToFile('sampleReadme.md', userData))
};

// function call to initialize program
init();