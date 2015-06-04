var configTheme = function($mdThemingProvider) {

	// Themes
	$mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('orange')
	    .warnPalette('red');
}
var configRoutes = function($routeProvider) {
	// Configure routes
	$routeProvider.when('/view1',{
		templateUrl: 'views/view1.html',
		controller: 'ctrl1'
	}).when('/view2',{
		templateUrl: 'views/view2.html',
		controller: 'ctrl2'
	}).otherwise({
		redirectTo: '/view1'
	});
}

module.exports = {
	configTheme : configTheme,
	configRoutes : configRoutes
}