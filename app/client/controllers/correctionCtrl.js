var _ = require('lodash');
var dashboardDef = require('./dashboardDef');

var correctionCtrl = function($scope, $location, $routeParams, $q, dataService){
	
	var getDashboard = function() {
		return dataService.getDashboardsList()
			   	.then(function(dashboards) {
			    		return dashboards.map(function(dashboard) {
			    			var currentId = dashboard.id;
						 	var dashRef = _.find(dashboardDef, function(dash) {
						   		return dash.id == currentId;
						 	});
						 	return _.assign(dashboard, dashRef);
			    		}).map(function(dashboard) {
			    			dashboard.dash={};
						 	dashboard.loaded = $q.defer();
			    			return dashboard;
			    		}).filter(function(dash) {
			    			return (dash.id == $routeParams.id)
			    		}); 		
			   	})
			   	.then(function(dashboard) {
					$scope.dashboard = dashboard[0];
				})
				
				;
	}
	
	$scope.dashboards=[];
	getDashboard();

	

	
	$scope.msgSave = false;
	$scope.saveCorrection = function($event) {
		$event.target.disabled = true;
		$scope.msgSave = true;
		
		dataService.saveCorrection($scope.dashboard);
		
	};

}



module.exports = correctionCtrl;