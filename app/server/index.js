
var config = require('./utils/appconfig');
var server = require('./server');
var checkRouter = require('./api/checkrouter');

// Enregistrement des api Rest
server.use('/api', checkRouter);


// The server is now started.
var _onExpressStarted = function(){
	console.log('Application started on port: ' + config.getPort());
}

server.listen(config.getPort(),_onExpressStarted);


