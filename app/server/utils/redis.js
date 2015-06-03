var config = require('./appconfig');
var redis = require('redis');

var options = {};
if (config.getRedisPassword() != ""){
	options.auth_pass = config.getRedisPassword();
}

var client = redis.createClient(config.getRedisPort(),config.getRedisHost(),options);

module.exports = client;

