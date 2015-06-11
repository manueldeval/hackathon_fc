var configTheme = function($mdThemingProvider) {

	// Themes
	$mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('amber')
	    .warnPalette('red');
}
var configRoutes = function($routeProvider) {
	// Configure routes
	$routeProvider.when('/accueil',{
		templateUrl: 'views/accueil.html',
		controller: 'ctrl1'
	}).when('/view2',{
		templateUrl: 'views/view2.html',
		controller: 'ctrl2'
	}).otherwise({
		redirectTo: '/accueil'
	});
}

module.exports = {
	configTheme : configTheme,
	configRoutes : configRoutes
}