// TODO: #1 Include packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

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
	{
		name: 'title',
		type: 'input',
		message: "What's the title of your project?"
	},
	{
		name: 'description',
		type: 'input',
		message: 'Give a short description of your project:'
	},
	{
		name: 'license',
		type: 'list',
		message: 'What kind of license should your project have?',
		choices: [
			'Apache License 2.0',
			'Boost Software License 1.0',
			'GNU General Public License',
			'GNU General Public License 2.0',
			'MIT License',
			'Mozilla Public License 2.0',
			'Unlicense License'
		]
	},
	{
		name: 'dependencies',
		type: 'input',
		message: 'Command to install dependencies:'
	},
	{
		name: 'tests',
		type: 'input',
		message: 'Command to run tests:'
	},
	{
		name: 'usage',
		type: 'input',
		message: 'How is this repo used?'
	},
	{
		name: 'contributions',
		type: 'input',
		message: 'How can someone contribute?'
	},
	{
		name: 'username',
		type: 'input',
		message: "What's your GitHub username?"
	},
	{
		name: 'email',
		type: 'input',
		message: "What's your email?"
	}
];

// TODO: #3 Create a function to write README file

/**
 * @param {string} fileName
 * @param {string} data
 */
function writeToFile(fileName, data) {
	fs.writeFileSync(fileName, data);
}

// TODO: #4 Create a function to initialize app
function init() {}

// Function call to initialize app
init();
