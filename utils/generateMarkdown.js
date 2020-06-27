// function to generate markdown for README
const generateMarkdown = data => {
  let license;
  let badge;

  switch(data.license) {
    case 'MIT':
      license = `MIT License

      Copyright (c) [${data.year}] [${data.name}]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`;
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0':
      license = 'Apache License';
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPLv3':
      license = 'GNU';
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC License':
      license = 'ISC';
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
  }
  return `# ${data.title}
  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  Run the following command to install the app: ${data.install}

  ## Usage
  ${data.usage}

  * Visit Github to track changes that were made or to clone the repo: [Github Repo](https://github.com/${data.gitName}/${data.title}).

  ## Contributing
  ${data.contributing}
  
  ## License
  ${license}
  
  ## Tests
  ${data.test}

  ## Questions
  Please direct any questions to ${data.email}, or visit the GitHub repository at https://github.com/${data.gitName}/${data.title}.`;
};

module.exports = generateMarkdown;