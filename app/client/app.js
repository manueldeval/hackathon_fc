var config = require('./config/config');

var app = angular.module('app', ['ngRoute','ngMaterial']);

// SERVICES
app.provider('loginService', require('./services/loginService'));

// CONTROLLERS
app.controller('ctrl2', ['$scope', require('./controllers/ctrl2')]);
app.controller('accueilCtrl', ['$scope', '$location', require('./controllers/accueilCtrl')]);  
app.controller('globalCtrl', ['$scope', require('./controllers/globalCtrl')]);
app.controller('dashboardCtrl', ['$scope', '$location', require('./controllers/dashboardCtrl')]);
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);  

app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);