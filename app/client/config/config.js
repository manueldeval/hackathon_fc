var configTheme = function($mdThemingProvider) {

	// Themes
	$mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('amber')
	    .warnPalette('red');
}
var configRoutes = function($routeProvider) {
	// Configure routes
	$routeProvider
	.when('/',{
		templateUrl: 'views/dashboard.html',
		controller: 'dashboardCtrl'
	})
	.when('/accueil',{
		templateUrl: 'views/accueil.html',
		controller: 'accueilCtrl'
	})
	.when('/view2',{
		templateUrl: 'views/view2.html',
		controller: 'ctrl2'
	})
	.otherwise({
		redirectTo: '/accueil'
	});
}

module.exports = {
	configTheme : configTheme,
	configRoutes : configRoutes
}