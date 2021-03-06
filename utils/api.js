const axios = require('axios');
const fs = require('fs');
const mdGen = require('./generateMarkdown');

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(err) {
    if (err) throw err;
    console.log('File sucessfully created!');
  });
}

const api = {
  createReadmeFile(
    username,
    badge,
    title,
    description,
    tableContents,
    installation,
    usage,
    license,
    contributing,
    test,
    questions
  ) {
    console.log('Getting user info...', username);
    const queryUrl = 'https://api.github.com/users/' + username;

    axios.get(queryUrl).then(function(response) {
      var user = {
        name: response.data.name,
        email: response.data.email,
        profilePic: response.data.avatar_url
      };

      var data = mdGen.generateMarkdown(
        user,
        badge,
        title,
        description,
        tableContents,
        installation,
        usage,
        license,
        contributing,
        test,
        questions
      );
      writeToFile('README-Generated.md', data);
    });
  }
};

module.exports = api;
