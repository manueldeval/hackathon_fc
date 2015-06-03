var ctrl1 = require('./controllers/ctrl1');
var ctrl2 =require('./controllers/ctrl2')
var loginCtrl =require('./controllers/loginCtrl')

var app = angular.module('app', ['ngRoute','ngMaterial']);
app.controller('')
app.controller(ctrl1.name, ['$scope', ctrl1.ctrl]);  
app.controller(ctrl2.name, ['$scope', ctrl2.ctrl]);  
app.controller(loginCtrl.name, ['$scope', '$mdDialog', '$http', loginCtrl.ctrl]);  

app.config(['$mdThemingProvider', function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('orange')
	    .warnPalette('red');
}]);


app.config(['$routeProvider', function($routeProvider){
	// Configure routes
	$routeProvider.when('/view1',{
		templateUrl: 'views/view1.html',
		controller: ctrl1.name
	}).when('/view2',{
		templateUrl: 'views/view2.html',
		controller: ctrl2.name
	}).otherwise({
		redirectTo: '/view1'
	});

}]);

