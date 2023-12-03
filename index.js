// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    }
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md created.');
        }
    });
}

// Generate README content
function generateReadmeContent(answers) {
    const licenseBadge = answers.license !== 'None' ? `![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)` : '';
    const licenseNotice = answers.license !== 'None' ? `This project is licensed under the ${answers.license} license.` : 'This project is not licensed.';

    return `# ${answers.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${licenseNotice}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}). Also, you can find more of my work at [${answers.github}](https://github.com/${answers.github}/).`;
}

// Initialize application
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateReadmeContent(answers);
            writeToFile('README.md', readmeContent);
        });
}

// Start application
init();
