
var loginCtrl = function($scope, $window, loginService){

	var login = function() {
        document.location.href="/auth";
    }
    var logout = function() {
        loginService.logout()
                    .then(function(result) {
                        $scope.app.authentified = false;
                        $scope.app.user={};
                        if (result) {
                            $window.location.href=result;
                        }
                    })
    }

 	$scope.login = login;
    $scope.logout = logout;
}

module.exports = loginCtrl;