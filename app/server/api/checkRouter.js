var express    = require('express');

var router = express.Router();              // get an instance of the express Router

router.get('/check', function(req, res) {
    res.json({ status: 'ok' });   
});

module.exports=router;
