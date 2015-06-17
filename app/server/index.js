
var config = require('./utils/appconfig');
var server = require('./server');
var checkRouter = require('./api/checkRouter');
var loginRouter = require('./api/loginRouter');
var dataRouter = require('./api/dataRouter');
var callbackRouter = require('./api/callbackRouter');
var redis = require('./utils/redis');

// Enregistrement des api Rest
server.use('/api', checkRouter);
server.use('/auth', loginRouter);
server.use('/data', dataRouter);
server.use('/OpenIdFranceConnect', callbackRouter);

// The server is now started.
var _onExpressStarted = function(){
	console.log('Application started on port: ' + config.getPort());
	redis.set('StartupDate', new Date(),function(){
		console.log('Redis started.');
	});
}

server.listen(config.getPort(),_onExpressStarted);


