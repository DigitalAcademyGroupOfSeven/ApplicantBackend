const dotenv = require('dotenv');
const result = dotenv.config();

var config = {};

config.connectionString = "mongodb://localhost/bccv";
config.secret = "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";
config.ORCID_TOKEN = process.env.ORCID_TOKEN || result.parsed.ORCID_TOKEN;

module.exports = config;