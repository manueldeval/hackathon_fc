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
app.controller('dashboardCtrl', ['$scope', '$location', '$q', 'dataService', require('./controllers/dashboardCtrl')]);
app.controller('correctionCtrl', ['$scope', '$location', '$routeParams', '$q', 'dataService', require('./controllers/correctionCtrl')]);
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);

app.controller('widgetCtrl', ['$scope', 'dataService', require('./controllers/dashboards/widgetCtrl')]);

app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);
