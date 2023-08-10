// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt ([
    {
        name: 'TITLE',
        type: 'input',
        message: 'What is the title of this project?'
    
    },
    {
        name: 'DESCRIPTION',
        type: 'input',
        message: 'Write a short paragraph describing your project.'
    },        
    {
        name: 'INSTALLATION',
        type: 'input',
        message: 'Any tips or tricks for installation?'
    },        
    {
        name: 'USAGE',
        type: 'input',
        message: 'Any tricks or tips involving general usage of this application.'
    },        
    {
        name: 'LICENSE',
        type: '',
        message: ''
    },        
    {
        name: 'CONTRIBUTING',
        type: 'input',
        message: 'What is your quest?'
    },        
    {
        name: 'TESTS',
        type: 'input',
        message: 'Please provide troubleshooting instructions in case of performance issues:'
    },        
    {
        name: 'QUESTIONS',
        type: 'input',
        message: [
            'What is your GitHub username?',
            'What is your email?'
        ]
    },        
]);

questions().then((answers) => {
    console.log(answers);
})
// writeToFile(fileName, data);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
    return `##IS THIS THING ON?
    
    This section is a test of displaying to a readme`;
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();




// TITLE -- 'What is the title of this project?'
// DESCRIPTION -- 'Write a short paragraph describing your project.'
// TABLE OF CONTENTS -- ((will be whatever sections end up included and a link to them))
// INSTALLATION -- 'Any tips or tricks for installation?'
// USAGE -- 'Any tricks or tips involving general usage of this application.'
// LICENSE -- ((list of options)), ((add a badge to display license in readme))
// CONTRIBUTING -- ((is this telling people how they can contribute to the site as a whole if they want to?))
// TESTS -- 'Please provide troubleshooting instructions in case of performance issues:'
// QUESTIONS -- 'What is your GitHub username?', 'What is your email?'


// NOTES:
//     - If the user answers no to a question or skips it, don't include it or the section heading
//     - Spontaneously create a readme file (like we did in the miniproject with the html)
