var express    = require('express');
var passport = require('passport');
var router = express.Router();              // get an instance of the express Router

router.get('/login/oidc_callback',
  passport.authenticate('oauth2'),
  function(req, res) {
    res.redirect('/');
  });

module.exports=router;