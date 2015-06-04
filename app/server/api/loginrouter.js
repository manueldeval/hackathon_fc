var express    = require('express');
var passport = require('passport');
var router = express.Router();              // get an instance of the express Router


router.get('/',
  passport.authenticate('oauth2', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile'] }));

router.get('/callback',
  passport.authenticate('oauth2'),
  function(req, res) {
    res.redirect('/');
  });

module.exports=router;