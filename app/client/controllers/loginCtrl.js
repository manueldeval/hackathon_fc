
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
            })
           .catch(function(err) {
                $scope.authentified = false;
                $scope.user={};
           });

    $scope.showProfileMenu=function() {
        var elem = document.getElementById('profileMenu');
        angular.element(elem).addClass('profileMenuShown');
        angular.element(elem).removeClass('profileMenuHidden');
    }
    $scope.hideProfileMenu=function() {
        var elem = document.getElementById('profileMenu');
        angular.element(elem).addClass('profileMenuHidden');
        angular.element(elem).removeClass('profileMenuShown');   
    }
}


module.exports = loginCtrl;