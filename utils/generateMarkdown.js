// function to generate markdown for README
const generateMarkdown = data => `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License)

  ## Installation
  Run the following command to install the app: ${data.install}

  ## Usage
  ${data.usage}

  * Visit Github to track changes that were made or to clone the repo: [Github Repo](https://github.com/${data.gitName}/${data.title}).

  ## Contributing
  ${data.contributing}
  
  ## License
  ${data.license}

  Copyright (c) [${data.year}] [${data.name}]

  ${data.license.text}
  
  ## Tests
  Run this command in your command line: ${data.test}

  ## Questions
  Please direct any questions to ${data.email}, or visit the GitHub repository at https://github.com/${data.gitName}/${data.title}.`;


module.exports = generateMarkdown;