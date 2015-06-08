
var loginCtrl = function($scope, loginService){

	$scope.username = "";
	$scope.password = "";
  $scope.authentified = false;

	var login = function(ev) {
    document.location.href="/auth";
  }
  var getUser = function() {
    return loginService.getUser();
  }

 	$scope.login = login;
  getUser().then(function(user) {
              $scope.authentified = true;
              $scope.user = user;
           })
           .catch(function(err) {
              $scope.authentified = false;
              $scope.user={};
           })
}


module.exports = loginCtrl;