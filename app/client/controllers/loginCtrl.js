
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
    var getUser = function() {
        return loginService.getUser();
    }

 	$scope.login = login;
    $scope.logout = logout;
    getUser().then(function(user) {
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

module.exports = loginCtrl;