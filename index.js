const inquirer = require('inquirer');
var api = require('./utils/api');

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
      },
      {
        type: 'input',
        message: 'What is your project description?',
        name: 'description'
      },
      {
        type: 'input',
        message: 'Please share app installation information?',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'How can others use your app?',
        name: 'usage'
      },
      {
        type: 'list',
        message: 'Do you have the license information?',
        name: 'license',
        choices: ["Apache", "BSD", "MIT"]
      },
      {
        type: 'input',
        message: 'Who is contributing with this project?',
        name: 'contributing'
      },
      {
        type: 'input',
        message: 'Share any test related information?',
        name: 'test'
      },
      {
        type: 'input',
        message: 'Frequently asked questions about your project?',
        name: 'questions'
      }
    ])
    .then(function({
      username,
      title,
      description,
      installation,
      usage,
      license,
      contributing,
      test,
      questions
    }) {
      api.createReadmeFile(
        username,
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        test,
        questions
      );
    });
}

init();
