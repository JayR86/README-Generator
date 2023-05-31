function getContributingMessage(confirmContributors, contributeData) {
  return confirmContributors
    ? contributeData
    : "Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.";
}

function getLicenseBadge(license) {
  return license === "no license"
    ? ""
    : `![badge](https://img.shields.io/badge/license-${license}-blue)`;
}

function getLicenseLink(license) {
  return license === "no license"
    ? ""
    : `[${license}](https://choosealicense.com/licenses/${license})`;
}

function getLicenseSection(license) {
  return license === "no license"
    ? ""
    : `## [License](#table-of-contents)\n\nThe application is covered under the following license:\n\n${getLicenseLink(
        license
      )}\n\n`;
}

function getLicenseTOC(license) {
  return license === "no license" ? "" : "* [License](#license)\n";
}

function generateMarkdown(markdownData) {
  const {
    title,
    license,
    what,
    why,
    how,
    installation,
    usage,
    confirmContributors,
    contribute,
    test,
    githubUsername,
    email,
  } = markdownData;

  return `
    # ${title}

    ${getLicenseBadge(license)}

    ## Table-of-Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${getLicenseTOC(license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## [Description](#table-of-contents)

    ${what}

    ${why}

    ${how}

    ## [Installation](#table-of-contents)

    ${installation}

    ## [Usage](#table-of-contents)

    ${usage}

    For more information on how to add screenshots for examples, visit the following website:

    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)

    ${getLicenseSection(license)}

    ## [Contributing](#table-of-contents)

    ${getContributingMessage(confirmContributors, contribute)}

    ## [Tests](#table-of-contents)

    ${test}

    ## [Questions](#table-of-contents)

    Please contact me using the following links:

    [GitHub](https://github.com/${githubUsername})

    [Email: ${email}](mailto:${email})
  `;
}

module.exports = generateMarkdown;
