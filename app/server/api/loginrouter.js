var express    = require('express');
var passport = require('passport');
var config = require('../utils/appconfig');
var router = express.Router();              // get an instance of the express Router

var providerConfig = config.getFranceConnectProviderConfig();

router.get('/',
  passport.authenticate('oauth2', { scope: providerConfig.scope }));

router.get('/user', function(req,res) {
	if (req.session && req.session.passport && req.session.passport.user && req.session.passport.user.accessToken) {
		res.status(200).send(req.session.passport.user._json);
	} else {
		res.status(401).send();
	}
});

router.get('/callback',
  passport.authenticate('oauth2'),
  function(req, res) {
    res.redirect('/');
  });

module.exports=router;