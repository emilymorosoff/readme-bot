// Required packages
const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');

function createFolderIfNotExists(folderPath) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
}

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
   // ... other questions
];

// Creating the folder for README
const folderPath = path.join(__dirname, "output");
createFolderIfNotExists(folderPath);

const filePath = path.join(folderPath, "README.md");

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log(`${fileName} created successfully!`);
    });
}

// Function to generate README content
function generateReadmeContent(answers) {
    // Your code to generate README content based on answers
    // For example:
    return `# ${answers.title}\n\n## Description\n${answers.description}\n\n## Installation\n${answers.installation}\n\n## Usage\n${answers.usage}`;
}

// Initialize the process
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateReadmeContent(answers);
            writeToFile(filePath, readmeContent);
        });
}

// Starting the script
init();
