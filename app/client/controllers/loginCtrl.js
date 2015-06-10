
var loginCtrl = function($scope, $window, loginService){

	$scope.username = "";
	$scope.password = "";
    $scope.authentified = false;

	var login = function() {
        document.location.href="/auth";
    }
    var logout = function() {
        loginService.logout()
                    .then(function(result) {
                        $scope.authentified = false;
                        $scope.user={};
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
                $scope.authentified = true;
                $scope.user = user;
                // FIXME
                console.log(user.gender);
                if (user.gender=="male") {
                    $scope.user.civilite="Mr";
                } else if (user.gender=="female") {
                    $scope.user.civilite="Mme";
                }
                
            })
           .catch(function(err) {
                $scope.authentified = false;
                $scope.user={};
           });

}


module.exports = loginCtrl;