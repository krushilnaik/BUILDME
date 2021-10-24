const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

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
			'GNU General Public License v3.0',
			'MIT License',
			'BSD 2-Clause "Simplified" License',
			'BSD 3-Clause "New" or "Revised" License',
			'Boost Software License 1.0',
			'Creative Commons Zero v1.0 Universal',
			'Eclipse Public License 2.0',
			'GNU Affero General Public License v3.0',
			'GNU General Public License v2.0',
			'GNU Lesser General Public License v2.1',
			'Mozilla Public License 2.0',
			'The Unlicense'
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

/**
 * @param {string} fileName
 * @param {string} data
 */
function writeToFile(fileName, data) {
	fs.writeFileSync(fileName, data);
}

function init() {
	console.log(welcome);

	inquirer.prompt(questions).then((response) => {
		console.log('Generating README from response');

		const markdown = generateMarkdown(response);

		writeToFile(`${response.title.replace(/ /g, '_')}_README.md`, markdown);
	});
}

// Function call to initialize app
init();
