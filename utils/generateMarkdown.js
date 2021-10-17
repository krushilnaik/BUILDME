// If there is no license, return an empty string

/**
 * @param {string} license
 */
function renderLicenseBadge(license) {
	const badges = {
      'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'BSD 2-Clause "Simplified" License': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
      'BSD 3-Clause "New" or "Revised" License': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
      'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/License-CC0-lightgrey.svg',
      'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
      'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL%20v3-green.svg',
      'GNU General Public License v2.0': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
      'GNU Lesser General Public License v2.1': 'https://img.shields.io/badge/License-LGPL%20v2.1-green.svg',
      'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
	};

	return badges[license];
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
	const links = {
      'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GNU General Public License v3.0': 'https://perso.crans.org/besson/LICENSE.html',
      'MIT License': 'https://opensource.org/licenses/MIT',
      'BSD 2-Clause "Simplified" License': 'https://opensource.org/licenses/BSD-2-Clause',
      'BSD 3-Clause "New" or "Revised" License': 'https://opensource.org/licenses/BSD-3-Clause',
      'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
      'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/share-your-work/public-domain/cc0/',
      'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
      'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0.html',
      'GNU General Public License v2.0': 'http://perso.crans.org/besson/LICENSE.html',
      'GNU Lesser General Public License v2.1': 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html',
      'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
      'The Unlicense': 'http://unlicense.org/'
	};

	return links[license];
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
	return license ? `[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})` : '';
}

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

	return `
      ${renderLicenseSection(license)}

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
      You can find more of my work on [my GitHub](https://github.com/${username}).
   `.replace(/\t/g, '');
}

module.exports = generateMarkdown;
