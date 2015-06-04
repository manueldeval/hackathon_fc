var config = require('./config/config');

var app = angular.module('app', ['ngRoute','ngMaterial']);

// SERVICES
app.provider('loginService', require('./services/loginService'));

// CONTROLLERS
app.controller('ctrl1', ['$scope', require('./controllers/ctrl1')]);  
app.controller('ctrl2', ['$scope', require('./controllers/ctrl2')]);  
app.controller('loginCtrl', ['$scope', '$mdDialog', '$http', '$location', require('./controllers/loginCtrl')]);  

app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);