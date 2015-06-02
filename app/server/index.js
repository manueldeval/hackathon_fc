
var config = require('./utils/appconfig');
var server = require('./server');
var checkRouter = require('./api/checkrouter');

server.use('/api', checkRouter);

// Test de config
console.log("k1: ",config.get('key1'));
console.log("k2: ",config.get('key2'));
console.log("k3: ",config.get('key3'));


