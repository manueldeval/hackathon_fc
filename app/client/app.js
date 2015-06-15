var config = require('./config/config');

var app = angular.module('app', ['ngRoute','ngMaterial']);

// SERVICES
app.provider('loginService', require('./services/loginService'));
app.provider('dataService', require('./services/dataService'));

// CONTROLLERS
app.controller('accueilCtrl', ['$scope', require('./controllers/accueilCtrl')]);
app.controller('globalCtrl', ['$scope', '$rootScope', 'loginService', require('./controllers/globalCtrl')]);
app.controller('dashboardCtrl', ['$scope', '$location', 'dataService', require('./controllers/dashboardCtrl')]);
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);  


app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);