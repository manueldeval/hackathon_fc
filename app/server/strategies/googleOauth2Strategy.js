var OAuth2Strategy = require('passport-oauth2').Strategy;
var HttpsProxyAgent=require('https-proxy-agent')
var config = require('../utils/appconfig');

var strategyConf = config.getGoogleProviderConfig();

var strategy = new OAuth2Strategy(strategyConf,
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);

// strategy.userProfile = function(accessToken, done) {
//   return done(null, {});
// };

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