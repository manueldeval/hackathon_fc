var express    = require('express');
var passport = require('passport');
var router = express.Router();              // get an instance of the express Router


router.post('/', passport.authenticate('local'),
	function(req,res) {
		res.send(req.user);
	}
);


module.exports=router;