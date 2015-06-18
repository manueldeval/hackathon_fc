var banqueCorrectionCtrl = function($scope, dataService){

	var getUserBanque = function() {
		$scope.dashboard.loading = true;
		dataService.getFromDataset('Banque_Coordonnees')
		           .then(function(datas) {
		        	    console.log(datas)
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           })
	}
	getUserBanque();
}

module.exports = banqueCorrectionCtrl;