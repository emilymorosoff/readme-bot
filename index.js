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
    // Add additional questions here
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
    // Use answers to construct README content
    return `# ${answers.title}\n// Additional content here`;
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
