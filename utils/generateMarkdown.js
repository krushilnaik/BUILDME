// TODO: #6 Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: #7 Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: #8 Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: #9 Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

`;
}

module.exports = generateMarkdown;
