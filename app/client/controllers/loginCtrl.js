
var loginCtrl = function($scope, $mdDialog, $http, $location){

	$scope.username = "";
	$scope.password = "";

	var showLogin = function(ev) {

    document.location.href="http://localhost:8080/auth";
 		// $mdDialog.show({
    //    	controller: 'loginCtrl',
    //   		templateUrl: 'views/login.html',
    //   		targetEvent: ev,
    // 	});
  }

  	// var login = function() {
  	// 	$http.get('/auth');
  	// }

  	$scope.showLogin = showLogin;
  	//$scope.login = login;

}


module.exports = loginCtrl;