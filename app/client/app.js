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
app.controller('correctionCtrl', ['$scope', '$location', '$routeParams', 'dataService', require('./controllers/correctionCtrl')]);
app.controller('loginCtrl', ['$scope', '$window', 'loginService', require('./controllers/loginCtrl')]);

app.controller('banqueDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/banqueDashboardCtrl')]);
app.controller('casierDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/casierDashboardCtrl')]);
app.controller('faiDashboardCtrl', ['$scope', '$q', 'dataService', require('./controllers/dashboards/faiDashboardCtrl')]);
app.controller('identiteDashboardCtrl', ['$scope', '$q', 'dataService', require('./controllers/dashboards/identiteDashboardCtrl')]);
app.controller('situProDashboardCtrl', ['$scope', 'dataService', require('./controllers/dashboards/situProDashboardCtrl')]);

app.controller('banqueCorrectionCtrl', ['$scope', 'dataService', require('./controllers/correction/banqueCorrectionCtrl')]);
app.controller('casierCorrectionCtrl', ['$scope', 'dataService', require('./controllers/correction/casierCorrectionCtrl')]);
app.controller('faiCorrectionCtrl', ['$scope', 'dataService', require('./controllers/correction/faiCorrectionCtrl')]);
app.controller('identiteCorrectionCtrl', ['$scope', 'dataService', require('./controllers/correction/identiteCorrectionCtrl')]);
app.controller('situProCorrectionCtrl', ['$scope', 'dataService', require('./controllers/correction/situProCorrectionCtrl')]);


app.config(['$mdThemingProvider', config.configTheme]);
app.config(['$routeProvider', config.configRoutes]);
