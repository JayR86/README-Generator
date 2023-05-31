const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => (titleInput ? true : "Please enter your title!"),
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub Username? (Required)",
    validate: (githubInput) =>
      githubInput ? true : "Please enter your GitHub username!",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (emailInput) =>
      emailInput ? true : "Please enter your email address!",
  },
  {
    type: "input",
    name: "what",
    message: "What is your project and what problem will it solve? (Required)",
    validate: (whatInput) =>
      whatInput ? true : "Please enter what your project is!",
  },
  {
    type: "input",
    name: "why",
    message: "Why did you create this project? (Required)",
    validate: (whyInput) =>
      whyInput ? true : "Please enter why you created this project!",
  },
  {
    type: "input",
    name: "how",
    message: "How will someone use this? (Required)",
    validate: (howInput) =>
      howInput ? true : "Please enter how to use your project!",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide step-by-step installation instructions for your project. (Required)",
    validate: (installInput) =>
      installInput ? true : "Please enter your installation instructions!",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use. (Required)",
    validate: (usageInput) =>
      usageInput ? true : "Please enter your use instructions!",
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide guidelines for contributing. (Required)",
    when: ({ confirmContributors }) => confirmContributors,
    validate: (contributorInput) =>
      contributorInput ? true : "Please enter contributor guidelines!",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app. (Required)",
    validate: (testInput) =>
      testInput ? true : "Please enter your test instructions!",
  },
];

// function to write README file
const writeFile = async (fileContent) => {
  try {
    await fs.promises.writeFile("./dist/generated-README.md", fileContent);
    return { ok: true, message: "File created!" };
  } catch (err) {
    throw err;
  }
};

// function to prompt questions and store user inputs
const init = async () => {
  const readmeData = await inquirer.prompt(questions);
  return readmeData;
};

// Function call to initialize app
(async () => {
  try {
    const readmeData = await init();
    console.log(readmeData);
    const pageMD = await generateMarkdown(readmeData);
    const { message } = await writeFile(pageMD);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
})();
