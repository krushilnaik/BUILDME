// TODO: #1 Include packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');

// TODO #5 Write the CLI "splash screen"
const welcome = chalk.green`
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	|                           Welcome to                             |
	|   ${chalk.magenta` ____    _    _   _____   _        _____   `}${chalk.cyan` __  __   ______    `}|
	|   ${chalk.magenta`|  _ \\  | |  | | |_   _| | |      |  __ \\`}${chalk.cyan`  |  \\/  | |  ____|   `}|
	|   ${chalk.magenta`| |_) | | |  | |   | |   | |      | |  | | `}${chalk.cyan`| \\  / | | |__      `}|
	|   ${chalk.magenta`|  _ <  | |  | |   | |   | |      | |  | | `}${chalk.cyan`| |\\/| | |  __|     `}|
	|   ${chalk.magenta`| |_) | | |__| |  _| |_  | |____  | |__| | `}${chalk.cyan`| |  | | | |____    `}|
	|   ${chalk.magenta`|____/   \\____/  |_____| |______| |_____/ `}${chalk.cyan` |_|  |_| |______|   `}|
	|                                                                  |
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

// TODO: #2 Create an array of questions for user input
const questions = [
	"What's the title of your project?",
	'Give a short description of your project:',
	'What kind of license should your project have?',
	'Command to install dependencies:',
	'Command to run tests:',
	'How is this repo used?',
	'How can someone contribute?',
	"What's your GitHub username?",
	"What's your email?"
];

// TODO: #3 Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: #4 Create a function to initialize app
function init() {}

// Function call to initialize app
init();
