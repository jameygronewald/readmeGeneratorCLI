// Required Modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    'What is your full name?',
    'What is your email address?',
    'What is your GitHub username?',
    'What is the title of your project without any spaces (this will also be the title of your repo)?',
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
            message: questions[2],
            name: 'gitName'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'usage'
        },
        {
            type: 'list',
            message: questions[7],
            name: 'license',
            choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC License']
        },
        {
            type: 'input',
            message: questions[8],
            name: 'year'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[10],
            name: 'test'
        }
    ]).then(userData => writeToFile(`./generatedReadmes/${userData.title}.md`, userData));
};
// function call to initialize program
init();