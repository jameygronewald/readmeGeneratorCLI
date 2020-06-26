// Required Modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    'What is your full name?',
    'What is your email address?',
    'What is your GitHub username?',
    'What is the title of your project (this will also be the title of your repo)?',
    'Please enter a description for your project:',
    'Please enter instructions for installing your app:',
    'How is your application used?',
    'Choose a license to include in your README:',
    'What is the current year?',
    'How can others contribute to your project?',
    'How are tests run in your application?'
];
console.log(questions[0]);
// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) throw error;
        else console.log('Success!');
    });
};

// function to initialize program
const init = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'name'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitName'
        },
        {
            type: 'input',
            message: 'What is the title of your project (this will also be the title of your repo)?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description for your project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please enter instructions for installing your app:',
            name: 'install'
        },
        {
            type: 'input',
            message: 'How is your application used?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Choose a license to include in your README:',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3', 'ISC License']
        },
        {
            type: 'input',
            message: 'What is the current year?',
            name: 'year'
        },
        {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'How are tests run in your application?',
            name: 'test'
        }
    ]).then(userData => writeToFile(`./generatedReadmes/${userData.title}.md`, userData));
};

// function call to initialize program
init();