// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Tests](#Tests)
  * [License](#License)

  ## Installation

1. Clone the Github Repository [here](https://github.com/jameygronewald/passwordGenerator).
2. Open index.html in browser.


`;
}

module.exports = generateMarkdown;
