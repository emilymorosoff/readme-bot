// Function to return a license badge
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) return '';
  // Update this line with correct license links as needed
  return `[License](https://opensource.org/licenses/${license})`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License\nThis project is licensed under the ${license}. For more information, see the [license link](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

// Add other sections like Installation, Usage, etc.

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
