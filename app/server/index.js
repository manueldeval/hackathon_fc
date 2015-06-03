
var config = require('./utils/appconfig');
var server = require('./server');
var checkRouter = require('./api/checkrouter');
var loginRouter = require('./api/loginrouter');

// Enregistrement des api Rest
server.use('/api', checkRouter);
server.use('/login', loginRouter);

// The server is now started.
var _onExpressStarted = function(){
	console.log('Application started on port: ' + config.getPort());
}

server.listen(config.getPort(),_onExpressStarted);


