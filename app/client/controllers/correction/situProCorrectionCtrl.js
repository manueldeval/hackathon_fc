var situProCorrectionCtrl = function($scope, dataService){

	var getUserAcossSituationPro = function() {
		$scope.dashboard.loading=true;
		dataService.getFromDataset('ACOSS_SituationPro')
		           .then(function(datas) {
		           		$scope.dashboard.dash = datas;
		           		delete $scope.dashboard.loading;
		           })
	}

	getUserAcossSituationPro();
}

module.exports = situProCorrectionCtrl;