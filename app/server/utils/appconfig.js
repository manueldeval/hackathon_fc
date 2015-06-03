var config = require('config');

var _replaceDotBy_dot_String = function(key){
	return key.replace(/\./g,'_dot_');
}

// En variable d'environnement les '.' doivent être remplacés 
// par la chaine '_dot_'
var get = function(key){
	var envKey = _replaceDotBy_dot_String(key);
	if (process.env[envKey]){
		return process.env[envKey];
	} else {
		return config.get(key);
	}
}

var getPort = function(){ return get('PORT'); }
var getRedisPort =  function(){ return get('REDIS_PORT'); };
var getRedisHost =  function(){ return get('REDIS_HOST'); };
var getRedisPassword =  function(){ return get('REDIS_PASSWORD'); };



module.exports = {
	get : get,
	getPort : getPort,
	getRedisPort : getRedisPort,
	getRedisHost : getRedisHost,
	getRedisPassword : getRedisPassword
}


