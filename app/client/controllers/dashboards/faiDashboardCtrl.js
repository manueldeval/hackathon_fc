var faiDashboardCtrl = function($scope, $q, dataService){

	var getUserFai = function() {
		$scope.dashboard.loading = true;

		dataService.getFromDataset('FAI_Contact')
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           		$scope.dashboard.loaded.resolve();
		           })
	}

	getUserFai();
}

module.exports = faiDashboardCtrl;