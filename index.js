// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input



const languageArray = ["HTML", "CSS", "JavaScript", "Nodejs", "jQuery", "Bootstrap", "Angular", "VueJS", "Java", "Python", "GitHub"]
function promptUser() {

    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "projectLink",
            message: "Please add the link to your deployed application (use https://)"
        },

        {
            type: "input",
            name: "projectInfo",
            message: "Brief Description of the project?"
        },

        {
            type: "input",
            name: "userName",
            message: "Please enter the name(s) of the participant(s) of this project"
        },


        {
            message: "Please enter your email",
            name: "email",
            type: "input",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },


        {
            name: "languageUsed",
            type: "checkbox",
            message: "Select the technologies used on the project:",
            choices: languageArray,
        },


        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "linkedin",
            message: "Enter your LinkedIn URL."
        },

        {
            type: "input",
            name: "license",
            message: "Add MIT License to this project?",
            default: "No"
        },

        {
            type: "list",
            name: "addLicense",
            message: "Please select the type of License",
            choices: ["MIT", "Customized"],
            when: function (answers) {
                return answers.comments !== 'No'
            }
        },


    ]);
}

// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return `

//     `
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





function generateReadMe(answers) {

    return `

# ${answers.projectName}

## Description

${answers.projectInfo}

## Link to deployed application

Navigate to [Deployed Application](${answers.projectLink})

## Project Owner

${answers.userName}

## Contact Information

${answers.email}

## Github Profile

For more projects please check my [GitHub](${answers.github}) profile

## Technologies used

${answers.languageUsed}

## License

${answers.addLicense = `<details>
            <summary>
                <a>Show License</a>
            </summary>
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </details>`}


    `;
}




promptUser()
    .then(function (answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to readme.MD");
    })
    .catch(function (err) {
        console.log(err);
    });
