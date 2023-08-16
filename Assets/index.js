const fs = require('fs');
const inquirer = require('inquirer');
let yourBadge = '';

// Writes the README file
const generateReadMe = ({title, description, installation, usage, license, repolink, tests, questions1, questions2}, yourBadge) => 
{
    return `# ${title} #
${yourBadge}

## Table of Contents ##
1. [Description](https://github.com/ebrest993/Read_Me_Generator#description)
2. [Installation](https://github.com/ebrest993/Read_Me_Generator#installation)
3. [Usage](https://github.com/ebrest993/Read_Me_Generator#usage)
4. [Licensing](https://github.com/ebrest993/Read_Me_Generator#licensing)
5. [Contributing](https://github.com/ebrest993/Read_Me_Generator#contributing)
6. [Test](https://github.com/ebrest993/Read_Me_Generator#test)
7. [Contact](https://github.com/ebrest993/Read_Me_Generator#contact)

## Description ###
    
${description}
    
##############

## Installation ###

${installation}

#############

## Usage ###

${usage}

#############

## Licensing ###

This project is licensed under the ${license} License.

#############

## Contributing ### 

If developers wish to request access for contribution, the repository can be found at this link: [GitHub Repo](${repolink})

##############

## Test ###

${tests}

##############

## Contact ###

For any questions or to contact the developer directly:

email: [${questions1}]

GitHub: [${questions2}]`;
}

const init = () => inquirer.prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of this project?'
        
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write (or paste) a short paragraph describing your project.'
    },        
    {
        name: 'installation',
        type: 'input',
        message: 'Write (or paste) any tips or tricks for installation?'
    },        
    {
        name: 'usage',
        type: 'input',
        message: 'Any tricks or tips involving general usage of this application?'
    },        
    {
        name: 'license',
        type: 'list',
        message: 'What license are you using?',
        choices: [
        'MIT',
        'Apache',
        'BSD 3-Clause',
        'GPLv2',
        'GPLv3',
        'None',
        'Other',
        ]
    },        
    {
        name: 'repolink',
        type: 'input',
        message: 'Please provide the link to your repository:'
    },        
    {
        name: 'tests',
        type: 'input',
        message: 'Please provide troubleshooting instructions in case of performance issues:'
    },        
    {
        name: 'questions1',
        type: 'input',
        message: 'What is your email?'
    },
    {
        name: 'questions2',
        type: 'input',
        message: 'What is your GitHub username?'
    },        
])

init()
.then((answers) => {
    console.log(yourBadge);
    workInProgress(answers);
    function workInProgress(answers) {
        const licenseAnswer = answers.license;
        if (licenseAnswer === 'MIT'){
            yourBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (licenseAnswer === 'Apache') {
            yourBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (licenseAnswer === 'BSD 3-Clause') {
            yourBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        } else if (licenseAnswer === 'GPLv2') {
            yourBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        }else if (licenseAnswer === 'GPLv3') {
            yourBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (licenseAnswer === 'None' || licenseAnswer === 'Other') {
            console.log(licenseAnswer);
        }
    }
    const readMeContent = generateReadMe(answers, yourBadge);
    fs.writeFileSync('README.md', readMeContent)
})
.then (() => 
console.log('Hey, it works!')
)
.catch(err => console.log(err));