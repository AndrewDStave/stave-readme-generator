// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/licence-${license}-yellowgreen.svg)`;
  }
  
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
      return `\n* [license](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
      return `## License
      Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Stave", data)
return `# ${data.Title}
by ${data.Name}
${renderLicenseBadge(data.Licence[0])}
## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Contact-me](#Contact-me)
*[Testing](#testing)
${renderLicenseLink(data.Licence)}
## Description
${data.Description}
## Installation
${data.Installation}
${data.Test}
## Contact-Me
${data.Email}
${data.Github}

`;
}


module.exports = generateMarkdown;