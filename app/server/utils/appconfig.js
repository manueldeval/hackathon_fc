var fs = require('fs');

var _parseConfigFile = function(){
	return JSON.parse(fs.readFileSync("./config/default.json"));
}

var _clone = function(object){
	return JSON.parse(JSON.stringify(object));
}

var _getConfigEnv = function(){
	return _clone(process.env);
}

var _mergeConfigFileAndEnv = function(configFile,env){
	var splittedKeysEnvArray = Object.keys(env).map(function(key){
		return {path:key.split(/_dot_/i),value:env[key]};
	});
	splittedKeysEnvArray.forEach(function(pathAndValueTuple){
		var path = pathAndValueTuple.path;
		var value = pathAndValueTuple.value;
		var currentObject = configFile;
		// Create the path
		path.forEach(function(fragment,index){
			if (index == path.length - 1){
				currentObject[fragment] = value;
			} else {
				if (!currentObject[fragment]){
					currentObject[fragment] = {};
				} 
				currentObject = currentObject[fragment];
			}
		});
	});
	return configFile;
}

var _getByPath = function(obj, path){
    var keys = path.split('.');
    var output = obj;
    keys.forEach(function(k){
        output = output[k];
        if (output === undefined){ throw new Error("The config key '"+path+"' does not exists."); }
    });
    if (output === undefined){ throw new Error("The config key '"+path+"' does not exists."); }
    return output;
};

var _hasByPath = function(obj, path) {
	var keys = path.split('.');
    var output = obj;
    keys.forEach(function(k){
        output = output[k];
        if (output === undefined){ return false; }
    });
    if (output === undefined){ return false; }
    return true;
}

var CONFIG = _mergeConfigFileAndEnv(_parseConfigFile(),_getConfigEnv());

var getAllAsObject = function(){ return _clone(CONFIG); }
var get = function(path){ return _getByPath(CONFIG,path); }
var has = function(path){ return _hasByPath(CONFIG,path); }

// Project related functions.
var getPort = function(){ return get('PORT'); }
var getRedisPort =  function(){ return get('REDIS_PORT'); };
var getRedisHost =  function(){ return get('REDIS_HOST'); };
var getRedisPassword =  function(){ return get('REDIS_PASSWORD'); };
var getHttpProxy =  function(){ return get('http_proxy'); };
var hasHttpProxy = function() { return has('http_proxy'); };

var getGoogleProviderConfig = function() { return get('PROVIDERS.GOOGLE')};
var getFranceConnectProviderConfig = function() { return get('PROVIDERS.FRANCECONNECT')};


module.exports = {
	getAllAsObject : getAllAsObject,
	get : get,
	has : has,
	getPort : getPort,
	getRedisPort : getRedisPort,
	getRedisHost : getRedisHost,
	getRedisPassword : getRedisPassword,
	getHttpProxy : getHttpProxy,
	hasHttpProxy: hasHttpProxy,
	getGoogleProviderConfig: getGoogleProviderConfig,
	getFranceConnectProviderConfig: getFranceConnectProviderConfig
}


