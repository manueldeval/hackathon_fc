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
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);




app.controller('widgetCtrl', ['$scope', 'dataService', require('./controllers/dashboards/widgetCtrl')]);
/*app.controller('banqueDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/banqueDashboardCtrl')]);
app.controller('casierDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/casierDashboardCtrl')]);
app.controller('faiDashboardCtrl', ['$scope', '$q', 'dataService', require('./controllers/dashboards/faiDashboardCtrl')]);
app.controller('identiteDashboardCtrl', ['$scope', '$q', 'dataService', require('./controllers/dashboards/identiteDashboardCtrl')]);
app.controller('situProDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/situProDashboardCtrl')]);
*/

app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);
