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
function renderLicenseSection(license) {}

// TODO: #9 Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

`;
}

module.exports = generateMarkdown;
