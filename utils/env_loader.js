/**
 * Loads environment variables from a .env file into process.env
 */
function envLoader() {
  // Load environment variables from .env file
  require('dotenv').config();
}

module.exports = envLoader;
