var config = require('./config/config');

var app = angular.module('app', ['ngRoute','ngMaterial', 'ui.sortable']);

// DIRECTIVES
app.directive('dynamicCtrl', ['$compile', '$parse', require('./directives/dynamicCtrlDirective')]);

// SERVICES
app.provider('loginService', require('./services/loginService'));
app.provider('dataService', require('./services/dataService'));

// CONTROLLERS
app.controller('accueilCtrl', ['$scope', require('./controllers/accueilCtrl')]);
app.controller('globalCtrl', ['$scope', '$rootScope', 'loginService', require('./controllers/globalCtrl')]);
app.controller('dashboardCtrl', ['$scope', '$location', 'dataService', require('./controllers/dashboardCtrl')]);
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);

app.controller('banqueDashboardCtrl', ['$scope', require('./controllers/dashboards/banqueDashboardCtrl')]);
app.controller('casierDashboardCtrl', ['$scope', require('./controllers/dashboards/casierDashboardCtrl')]);
app.controller('faiDashboardCtrl', ['$scope', require('./controllers/dashboards/faiDashboardCtrl')]);
app.controller('identiteDashboardCtrl', ['$scope', require('./controllers/dashboards/identiteDashboardCtrl')]);
app.controller('situProDashboardCtrl', ['$scope', require('./controllers/dashboards/situProDashboardCtrl')]);


app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);
