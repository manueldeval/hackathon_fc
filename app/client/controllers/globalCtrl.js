
var globalCtrl = function($scope, $rootScope, loginService){
	$scope.app = {};
	$scope.app.user = {};
	$scope.app.authentified = false;

	$rootScope.app = $scope.app;

	loginService.getUser().then(function(user) {
                $scope.app.authentified = true;
                $scope.app.user = user;
                // FIXME
                if (user.gender=="male") {
                    $scope.app.user.civilite="Mr";
                } else if (user.gender=="female") {
                    $scope.app.user.civilite="Mme";
                }
            })
           .catch(function(err) {
                $scope.app.authentified = false;
                $scope.app.user={};
           });
}


module.exports = globalCtrl;