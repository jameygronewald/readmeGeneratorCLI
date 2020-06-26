const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    'What is your full name?',
    'What is your GitHub username?',
    'What is your email address?',
    'What is the title of your project (this will also be the title of your repo)?',
    'Please enter a description for your project:',
    'How can a user install your application?',
    'How is your application used?',
    'How can others contribute to your project?',
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
            message: 'How will your app be used?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Choose a license to include in your README:',
            name: 'license',
            choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
        },
        {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please enter the command to test you app:',
            name: 'test'
        }
    ]).then(userData => writeToFile(`./generatedReadmes/${userData.title}.md`, userData))
};

// function call to initialize program
init();