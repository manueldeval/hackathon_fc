
var loginCtrl = function($scope, $mdDialog, $http){

	$scope.username = "";
	$scope.password = "";

	var showLogin = function(ev) {
  		$mdDialog.show({
	      	controller: 'loginCtrl',
      		templateUrl: 'views/login.html',
      		targetEvent: ev,
    	});
  	}

  	var login = function() {
  		$http.post('/login', {username:$scope.username, password:$scope.username});
  	}

  	$scope.showLogin = showLogin;
  	$scope.login = login;

}


module.exports = {
	name:'loginCtrl',
	ctrl:loginCtrl
}
