const generateMarkdown = {
  generateMarkdown(
    user = '',
    title = '',
    description = '',
    installation = '',
    usage = '',
    license = '',
    contributing = '',
    test = '',
    questions = ''
  ) {
    return `
# ${title}
## Description
${description}
## Table of contents
- [Installation](#Installation)
- [Usage](#usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

## Installation
${installation}
## Usage
${usage}
## License
![License: MIT](https://img.shields.io/badge/License-${license}-blue.svg)
## Contributing
${contributing}
## Test
${test}
## Questions
${questions}

![](${user.profilePic})

Name: ${user.name}

Email: N/A


`;
  }
};

module.exports = generateMarkdown;
