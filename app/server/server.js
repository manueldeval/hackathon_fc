var express    = require('express');
var bodyParser = require('body-parser');
var browserify_express = require('browserify-express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app        = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// Static stuff
// The / url is mapped to the static content
app.use(express.static('./app/public/'));

// node modules exposed as /vendor/
// The /vendor url expose the node_module directory
app.use('/vendor', express.static('./node_modules/'));

// passport
app.use(passport.initialize());
passport.use(new LocalStrategy(function(username, password, done) {
	if (username != "admin" || password != "admin") {
		return done(null, false, { message : 'Utilisateur inconnu ou mauvais mot de passe'});
	}
	return done(null, {username:"admin", prenom:"Jean-Claude", nom:"Duss"});
}));
passport.serializeUser(function(user, done) {
	done(null, user.username);
});
passport.deserializeUser(function(id, done) {
	if (id=="admin") {
		done(null, {username:"admin", prenom:"Jean-Claude", nom:"Duss"});
	} else {
		done("KO", null);
	}
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
