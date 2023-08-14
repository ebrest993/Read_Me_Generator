// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const APIKey = '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';

// Writes the README file
const generateReadMe = ({ title, description, installation, usage, license, repolink, test, questions1, questions2}) => 
{
    return `## ${title} ##
    
    
    ## Description ##
    
    ${description}
    
################################################################

# Installation #

${installation}

################################################################

# Usage #

${usage}

################################################################

# Licensing #

This project is licensed under the ${license} License.

################################################################

# Contributing # 

If developers wish to request access for contribution, the repository can be found at this link: ${repolink}

################################################################

# Test #

${test}

################################################################

# Contact #

For any questions or to contact the developer directly:
email: [${questions1}]
GitHub: [${questions2}]`;
}

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
    workInProgress(answers);
    const readMeContent = generateReadMe(answers)
    fs.writeFileSync('README.md', readMeContent)
})
.then ((answers) => 
console.log('Hey, you did it again!')
)
.catch(err => console.log(err));


function workInProgress(answers) {
    // const yourBadge = ;
    const licenseAnswer = answers.license;
    if (licenseAnswer === 'MIT'){
        console.log('MIT');
    } else if (licenseAnswer === 'Apache') {
        console.log('2');
        
    } else if (licenseAnswer === 'BSD 3-Clause') {
        console.log('3');
        
    } else if (licenseAnswer === 'GPLv2') {
        console.log('4');
        
    }else if (licenseAnswer === 'GPLv3') {
        console.log('5');
        
    } else if (licenseAnswer === 'None' || licenseAnswer === 'Other') {
        console.log('6');
        
    }
}

// console.log(license.choices);


//MIT >>>
//Apache >>> [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// BSD 3-Clause >>> [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// GPLv2 >>> [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// GPLv3 >>> [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// None >>> 
// Other >>> 





//     - If the user answers no to a question or skips it, don't include it or the section heading
