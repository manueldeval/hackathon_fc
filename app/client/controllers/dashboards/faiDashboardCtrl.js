var faiDashboardCtrl = function($scope, dataService){

	var getUserFai = function() {
		$scope.dashboard.loading = true;
		dataService.getFromDataset('FAI_Contact')
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           })
	}

	getUserFai();
}

module.exports = faiDashboardCtrl;