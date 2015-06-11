var accueilCtrl = function($scope, $location){
	if ($scope.app.authentified) {
  		$location.path("/");
  	}
}


module.exports = accueilCtrl;
