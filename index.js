// n8n community node entry point for n8n-nodes-twenty
// This file serves as the main entry point for the npm package.
// n8n discovers nodes and credentials through the package.json "n8n" section.

const path = require('path');

// Export the package information for debugging
module.exports = {
  name: 'n8n-nodes-twenty',
  version: require('./package.json').version,
  description: 'Twenty CRM integration for n8n',

  // Helper function to get node path
  getNodePath: () => path.join(__dirname, 'dist', 'nodes', 'Twenty', 'Twenty.node.js'),
  getCredentialPath: () => path.join(__dirname, 'dist', 'credentials', 'TwentyApi.credentials.js'),

  // Check if files exist
  checkFiles: () => {
    const fs = require('fs');
    const nodePath = path.join(__dirname, 'dist', 'nodes', 'Twenty', 'Twenty.node.js');
    const credPath = path.join(__dirname, 'dist', 'credentials', 'TwentyApi.credentials.js');

    return {
      nodeExists: fs.existsSync(nodePath),
      credentialExists: fs.existsSync(credPath),
      distExists: fs.existsSync(path.join(__dirname, 'dist')),
      nodePath,
      credPath
    };
  }
};
