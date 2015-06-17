var casierDashboardCtrl = function($scope, dataService){

	var getUserCasier = function() {
		$scope.dashboard.loading = true;
		dataService.getFromDataset('MJ_Casier')
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           })
	}

	getUserCasier();
}

module.exports = casierDashboardCtrl;