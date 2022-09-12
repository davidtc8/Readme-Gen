// Object that will contain the questions that we will ask the user

const inquirer = require("inquirer");
const fs = require('fs');
const { setFips } = require("crypto");

inquirer.prompt( [
    {
        type: 'input',
        message: 'Name of the project',
        name: 'titleName',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please enter your title')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Project Description',
        name: 'projectDescription',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please enter your project description')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Provide a step-by-step guide of how to install your software',
        name: 'guideInstallation',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please enter the steps to install your software')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'How the user can use this application (Usage Guide)',
        name: 'usageGuide',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributionGuidelines',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Test instructions for your application',
        name: 'testInstructions',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    },
    // TODO: Pending to add a license as a list of options
    {
        type: 'list',
        message: "Select a license",
        name: 'license',
        choices:['MIT', 'Apache', 'GPL', 'None'],
        default: 'license1',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What'syour GitHub username?",
        name: 'githubUsername',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What's your email address?",
        name: 'emailAddress',
        validate: (answer) => {
            if (answer === '') {
                console.log('Please the user guide')
            } else {
                return true
            }
        }
    }
])
    .then(answers => {
        // Variables that we'll use on the Readme File
        let projectName = answers.titleName
        let projectDescription = answers.projectDescription
        let guideInstallation = answers.guideInstallation
        let usageGuide = answers.usageGuide 
        let contributionGuidelines = answers.contributionGuidelines
        let testInstructions = answers.testInstructions
        let githubUsername = answers.githubUsername
        let emailAddress = answers.emailAddress
        let license = answers.license

        // Using FS Library to create the file
        var readmeFile = fs.createWriteStream("./readme-test/README_TEST.md");
        readmeFile.once('open', function(fd) {
            // ------ Description Section ------
            readmeFile.write(`# ${projectName}\n`); // Project Name
            readmeFile.write(`![license image](https://img.shields.io/badge/license-${license}-brightgreen.svg)`); // Project Name
            readmeFile.write(`\n`);
            readmeFile.write(`${projectDescription}\n`); //Descriptions below the Project Name
            // ------ Table of content Section ------
            readmeFile.write(`# Table of Contents\n`); 
            readmeFile.write(`- [Go to installation section](#-installation)\n`); 
            readmeFile.write(`- [Go to usage guide section](#-usage-guide)\n`); 
            readmeFile.write(`- [Go to contribution guidelines section](#-contribution-guidelines)\n`); 
            readmeFile.write(`- [Go to test instructions section](#-test-instructions)\n`);
            readmeFile.write(`- [Go to questions section](#-questions)\n`);  
            readmeFile.write(`\n`);
            // ------ Installation ------
            readmeFile.write(`# Installation\n`);
            readmeFile.write(`${guideInstallation}`)
            readmeFile.write(`\n`);
            // ------ Usage Guide ------
            readmeFile.write(`# Usage Guide\n`);
            readmeFile.write(`${usageGuide}`)
            readmeFile.write(`\n`);
            // ------ License ------
            // ------ Contributing ------
            readmeFile.write(`# Contribution Guidelines\n`);
            readmeFile.write(`${contributionGuidelines}`)
            readmeFile.write(`\n`);
            // ------ Tests ------
            readmeFile.write(`# Test Instructions\n`);
            readmeFile.write(`${testInstructions}`)
            readmeFile.write(`\n`);
            // ------ License ------
            readmeFile.write(`# License\n`);
            readmeFile.write(`${license}`)
            readmeFile.write(`\n`);
            // ------ Questions ------
            readmeFile.write(`# Questions\n`);
            readmeFile.write(`- Here's my GitHub Profile in case you want to reach out!: https://github.com/${githubUsername}`)
            readmeFile.write(`\n`);
            readmeFile.write(`- Here's my email in case you want to write me: ${emailAddress}`)
            readmeFile.end();
        });
    })

