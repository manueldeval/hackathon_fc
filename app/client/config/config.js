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
		resolve: {
			factory: checkAuthentified
		}
	})
	.when('/correction/:id',{
		templateUrl: 'views/correction.html',
		resolve: {
			factory: checkAuthentified
		}
	})
	.when('/accueil',{
		templateUrl: 'views/accueil.html'
	})
	.when('/view2',{
		templateUrl: 'views/view2.html'
	})
	.otherwise({
		redirectTo: '/accueil'
	});
}

var checkAuthentified= function ($q, $rootScope, $location, loginService) {
	if ($rootScope.app.authentified) {
		console.log("utilisateur authentifié -> OK");
        return true;
    } else {
    	var deferred = $q.defer();
    	loginService.getUser().then(function(user) {
            deferred.resolve(true);
        })
        .catch(function(err) {
            deferred.reject();
            console.log("utilisateur non authentifié -> KO");
            $location.path("/accueil");
        });
    }
};

module.exports = {
	configTheme : configTheme,
	configRoutes : configRoutes
}