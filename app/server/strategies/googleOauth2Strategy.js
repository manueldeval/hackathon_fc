var OAuth2Strategy = require('passport-oauth2').Strategy;
var HttpsProxyAgent=require('https-proxy-agent')
var config = require('../utils/appconfig');

var strategy = new OAuth2Strategy({
    authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
    tokenURL: 'https://accounts.google.com/o/oauth2/token',
    clientID: '1011708465316-ideu33f84mug2pdb8ha5vcko8bm597e0.apps.googleusercontent.com',
    clientSecret: 'SLKuypPTKNfhGcsOVFMTGSrM',
    callbackURL: config.getRedirectOauth()//"http://localhost:8080/auth/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);


if (config.hasHttpProxy()) {
  var proxy = config.getHttpProxy();
  strategy._oauth2._oldExecuteRequest = strategy._oauth2._executeRequest;
  strategy._oauth2._executeRequest = function(http_library, options, post_body, callback) {
      var agent = new HttpsProxyAgent(proxy);
      options.agent = agent;
      strategy._oauth2._oldExecuteRequest(http_library, options, post_body, callback)
  }
}

module.exports = strategy;