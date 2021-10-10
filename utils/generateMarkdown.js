// TODO: #6 Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

/**
 * @param {string} license
 */
function renderLicenseBadge(license) {
	const badges = {
		'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
		'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
		'GNU General Public License': 'https://img.shields.io/badge/License-GPL-blue.svg',
		'GNU General Public License 2.0': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
		'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
		'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
		'Unlicense License': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
	};

	return badges[license];
}

// TODO: #7 Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	const links = {
		'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
		'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
		'GNU General Public License': 'http://perso.crans.org/besson/LICENSE.html',
		'GNU General Public License 2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
		'MIT License': 'https://opensource.org/licenses/MIT',
		'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
		'Unlicense License': 'http://unlicense.org/'
	};

	return links[license];
}

// TODO: #8 Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return license ? `[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})` : '';
}

// TODO: #9 Create a function to generate markdown for README
/**
 * @param {{
 * 	title: string,
 * 	description: string,
 * 	dependencies: string,
 * 	usage: string,
 * 	license: string,
 * 	contributions: string,
 * 	tests: string,
 * 	email: string,
 * 	username: string,
 * }} data
 */
function generateMarkdown(data) {
	const { contributions, dependencies, description, email, license, tests, title, usage, username } = data;

	return `${renderLicenseSection(license)}

# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${dependencies}
\`\`\`

## Usage

${usage}

## License

${license ? `This project is licensed under the ${license}.` : 'This project is not licensed.'}

## Contributions

${contributions}

## Tests

To run tests, run the following command
\`\`\`
${tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at <${email}>.
You can find more of my work on [my GitHub](https://github.com/${username}).`;
}

module.exports = generateMarkdown;
