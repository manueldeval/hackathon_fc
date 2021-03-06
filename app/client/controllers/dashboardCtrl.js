var _ = require('lodash');
var dashboardDef = require('./dashboardDef');

var dashboardCtrl = function($scope, $location, $q, dataService){
	
	var getDashboardsList = function() {
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
				    		}); 		
				   	})
				   	.then(function(dashboards) {
						$scope.dashboards = dashboards;
					});
	}

	var startChecks = function() {
		var fai = _.first(_.where($scope.dashboards, {id:'fai'}));
		var identite = _.first(_.where($scope.dashboards, {id:'identite'}));

		
		$q.all([fai.loaded.promise, identite.loaded.promise]).then(function() {
		 	var faiAdresse = _.where(fai, {label : 'adresse'});
		 	var identiteAdresse = _.where(identite, {label : 'address'});
		 	if (faiAdresse != identiteAdresse) {
		 		if (!fai.alertes) {
		 			fai.alertes=[]
		 		}
		 		if (fai.alertes.indexOf("Incohérence sur l'adresse") < 0) {
		 			fai.alertes.push("Incohérence sur l'adresse");
		 		}
		 	}
		})
	}
	var saveConfigDashboards = function() {
		var dashToSave = $scope.dashboards.map(function(dash) {
	    	return {id: dash.id, show: dash.show, alertes: dash.alertes};
	    })
	    dataService.saveDashboardConfig(dashToSave);
	}

	$scope.dragControlListeners = {
	    orderChanged: function(event) {
	    	saveConfigDashboards();
	    }
	};

	$scope.dashboards=[];
	getDashboardsList().then(startChecks);

	$scope.toggleDashboard = function(dashboard) {
		dashboard.show=!dashboard.show;
		saveConfigDashboards();
	}
}

module.exports = dashboardCtrl;