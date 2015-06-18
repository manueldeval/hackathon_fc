var widgetCtrl = function($scope, dataService){

	var getData = function() {
		$scope.dashboard.loading = true;

		dataService.getFromDataset($scope.dashboard.dataset)
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           		$scope.dashboard.loaded.resolve();
		           })
	}

	getData();
}

module.exports = widgetCtrl;