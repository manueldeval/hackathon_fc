var ctrl1 = require('./ctrl1');
var ctrl2 =require('./ctrl2')

var app = angular.module('app', ['ngRoute']);
app.controller(ctrl1.name, ['$scope', ctrl1.ctrl]);  
app.controller(ctrl2.name, ['$scope', ctrl2.ctrl]);  

app.config(['$routeProvider', function($routeProvider){

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
