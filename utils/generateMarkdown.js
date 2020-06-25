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

  ## Usage
  * Visit the deployed app: [Password Generator](https://jameygronewald.github.io/passwordGenerator/)
      1. Click "Generate Password" button to begin selecting preferences for randomly generated password
      2. Follow the prompts given by the app to select desired character sets and length of randomly generated password
      3. Watch as randomly generated password is displayed. Copy password to clipboard for personal use if desired.
      4. Click "Generate Password" button again and again to generate as many passwords as desired.


  * Visit Github to track changes that were made or to clone the repo: [Github Repo](https://github.com/jameygronewald/passwordGenerator).

  ## Contributors
  I, Jamey Gronewald, was the sole contributor on this project.

  ## Tests
  'Run npm test'

  ## License
  MIT License

  Copyright (c) [2020] [Jamey Gronewald]

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
}

module.exports = generateMarkdown;