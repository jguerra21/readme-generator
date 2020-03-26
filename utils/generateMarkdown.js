const generateMarkdown = {
  generateMarkdown(
    user = '',
    badge = '',
    title = '',
    description = '',
    tableContents = '',
    installation = '',
    usage = '',
    license = '',
    contributing = '',
    test = '',
    questions = ''
  ) {
    console.log('generateMarkdown');
    return `
# ${title}
## Description
${description}
## Badges
${badge}
## Table of contents
${tableContents}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Test
${test}
## Questions
${questions}
## User info
![](${user.profilePic})

Name: ${user.name}

Email: ${user.email}


`;
  }
};

module.exports = generateMarkdown;
