var express    = require('express');
var bodyParser = require('body-parser');
var browserify_express = require('browserify-express');
var passport = require('passport');
var googleOauth2Strategy = require('./strategies/googleOauth2Strategy');

var app        = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

var port = process.env.PORT || 8080;        // set our port

// Static stuff
// The / url is mapped to the static content
app.use(express.static('./app/public/'));

// node modules exposed as /vendor/
// The /vendor url expose the node_module directory
app.use('/vendor', express.static('./node_modules/'));

// passport
passport.use(googleOauth2Strategy);

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(id, done) {
	done(null, {});
})

// Auto browserify
// On each modification of the client code, 
// the bundle mapped to the /app.js is created.
var bundle = browserify_express({
    entry: __dirname + '/../client/app.js',
    watch: __dirname + '/../client/',
    mount: '/app.js',
    verbose: true,
    minify: true
});
app.use(bundle);

// export module
module.exports = app;
