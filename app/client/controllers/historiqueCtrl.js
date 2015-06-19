var historiqueCtrl = function($scope, $location, dataService){
	
	var getHistorique = function() {
		return dataService.getHistorique()
			   	.then(function(corrections) {
			   			$scope.historique = corrections;
			   	})				
				;
	}
	
	$scope.historique=[];
	getHistorique();

}



module.exports = historiqueCtrl;