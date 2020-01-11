var config = {};

config.connectionString = "mongodb://localhost/bccv";
config.secret = "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";

module.exports = config;