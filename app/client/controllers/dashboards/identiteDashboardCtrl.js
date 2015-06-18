var identiteDashboardCtrl = function($scope, $q, dataService){
	
	var getIdentite = function() {
		$scope.dashboard.loading = true;

		dataService.getFromDataset('identite_pivot')
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           		$scope.dashboard.loaded.resolve();
		           })
	}

	getIdentite();
}

module.exports = identiteDashboardCtrl;