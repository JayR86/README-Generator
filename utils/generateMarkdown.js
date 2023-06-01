// This file generates a markdown file for a README based on the user's input
const generateMarkdown = (markdownData) => {
  // Destructure the markdown data into variables
  const {
    title,
    license,
    description,
    installation,
    usage,
    contribute,
    test,
    githubUsername,
    email,
  } = markdownData;

  // Create a template literal for the license badge using a ternary operator
  const licenseBadge =
    license === "no license"
      ? ""
      : `![badge](https://img.shields.io/badge/license-${license}-blue)`;

  // Create a template literal for the license link using a ternary operator
  const licenseLink =
    license === "no license"
      ? ""
      : `[${license}](https://choosealicense.com/licenses/${license})`;

  // Create a template literal for the license section using a ternary operator
  const licenseSection =
    license === "no license"
      ? ""
      : `
    ## [License](#table-of-contents)

    The application is covered under the following license:

    ${licenseLink}
    `;

  // Create a template literal for the license TOC using a ternary operator
  const licenseTOC = license === "no license" ? "" : "* [License](#license)\n";

  // Create a template literal for the contributing message using a ternary operator
  const contributingMessage = contribute
    ? contribute
    : "Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.";

  // Return the markdown file as a template literal
  return `
    # ${title}

    ${licenseBadge}

    ## Table-of-Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${licenseTOC}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## [Description](#table-of-contents)

    ${description}

    ## [Installation](#table-of-contents)

    ${installation}

    ## [Usage](#table-of-contents)

    ${usage}

    For more information on how to add screenshots for examples, visit the following website:

    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)

    ${licenseSection}

    ## [Contributing](#table-of-contents)

    ${contributingMessage}

    ## [Tests](#table-of-contents)

    ${test}

    ## [Questions](#table-of-contents)

    Please contact me using the following links:

    [GitHub](https://github.com/${githubUsername})

    [Email: ${email}](mailto:${email})
  `;
};

module.exports = generateMarkdown;
