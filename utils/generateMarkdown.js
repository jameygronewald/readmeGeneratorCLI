// function to generate markdown for README
const generateMarkdown = data => `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Tests](#Tests)
  * [License](#License)

  ## Installation
  Run the following command to install the app: ${data.install}

  ## Usage
  ${data.usage}

  * Visit Github to track changes that were made or to clone the repo: [Github Repo](https://github.com/${data.gitName}/${data.title}).

  ## Contributors
  I, ${data.name}, was the sole contributor on the project ${data.title}.

  ## Tests
  Run this command in your command line: ${data.test}

  ## Questions
  Please direct any questions to ${data.email}, or visit the GitHub repository at https://github.com/${data.gitName}/${data.title}.

  ## License
  MIT License

  Copyright (c) [2020] [${data.name}]

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

module.exports = generateMarkdown;