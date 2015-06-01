var server = require('./server');
var checkRouter = require('./api/checkrouter');

server.use('/api', checkRouter);
