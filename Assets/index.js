// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt ([
    {
        name: 'test',
        type: 'input',
        message: [
            'What is your name?',
            'What is your quest?',
            'What is your favorite color?'
        ]
    }        
]);

questions().then((answers) => {
    console.log(answers);

})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
// }

// // Function call to initialize app
// init();
