// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// An array of questions for user input
const init = () => inquirer.prompt (
    [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of this project?'
        
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a short paragraph describing your project.'
    },        
    {
        name: 'installation',
        type: 'input',
        message: 'Any tips or tricks for installation?'
    },        
    {
        name: 'usage',
        type: 'input',
        message: 'Any tricks or tips involving general usage of this application.'
    },        
    {
        name: 'license',
        type: 'list',
        message: 'What license are you using?',
        choices: [
            'a',
            'b',
            'c'
        ]
    },        
    {
        name: 'contributing',
        type: 'input',
        message: 'What is your contribution section (dont forget to ask what this is)?'
    },        
    {
        name: 'tests',
        type: 'input',
        message: 'Please provide troubleshooting instructions in case of performance issues:'
    },        
    {
        name: 'questions1',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'questions2',
        type: 'input',
        message: 'What is your email?'
    },        
])

init()
    .then((answers) => {
        const readMeContent = generateReadMe(answers)
        fs.writeFileSync('README.md', readMeContent)
    })
    .then (() => 
        console.log('Hey look, you did it!')
    )
    .catch(err => console.log(err));

// Writes the README file
const generateReadMe = ({ title, description, installation, usage, license, contributing, test, questions1, questions2}) => 
    {
    return `## ${title} ##

is the title of this project.
    
# Description #

${description} blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
    
# Installation #

${installation}`;
    }



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
