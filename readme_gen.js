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
        let testInstructions = answers.testInstructions
        let githubUsername = answers.githubUsername
        let emailAddress = answers.emailAddress

        // Using FS Library to create the file
        var readmeFile = fs.createWriteStream("./readme-test/README_TEST.md");
        readmeFile.once('open', function(fd) {
            // ------ Description Section ------
            readmeFile.write(`# ${projectName}\n`); // Project Name
            readmeFile.write(`${projectDescription}\n`); //Descriptions below the Project Name
            readmeFile.write(`\n`);
            // ------ Table of content Section ------
            readmeFile.write(`# Table of Contents\n`); 
            readmeFile.write(`- [Go to installation section](#-installation)\n`); 
            readmeFile.write(`\n`);
            // ------ Installation ------
            readmeFile.write(`# Installation\n`);
            // ------ Usage ------

            // ------ License ------

            // ------ Contributing ------

            // ------ Tests ------

            // ------ Questions ------

            readmeFile.end();
        });
    })

