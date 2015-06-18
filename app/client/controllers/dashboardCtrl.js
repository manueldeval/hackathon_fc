//var _ = require('lodash');

var dashboardCtrl = function($scope, $location, $q, dataService){
	
	var getDashboardsList = function() {
		return dataService.getDashboardsList()
				   	.then(function(dashboards) {
				   		return dashboards.map(function(dashboard) {
				   			if (dashboard.id == 'identite') {
				   				dashboard.label = 'Identité';
				   				dashboard.dash={};
				   				dashboard.icone='profile.svg';
				   				dashboard.loaded = $q.defer();
				   			}
				   			if (dashboard.id == 'casier') {
				   				dashboard.label = 'Casier Judiciaire';
				   				dashboard.dash={};
				   				dashboard.icone='casier.svg';
				   				dashboard.loaded = $q.defer();
				   			}
				   			if (dashboard.id == 'situPro') {
				   				dashboard.label = 'Situation professionnelle';
				   				dashboard.dash={};
				   				dashboard.icone='travail.svg';
				   				dashboard.loaded = $q.defer();
				   			}
				   			if (dashboard.id == 'fai') {
				   				dashboard.label = 'FAI';
				   				dashboard.dash={};
				   				dashboard.icone='fai.svg';
				   				dashboard.loaded = $q.defer();
				   			}
				   			if (dashboard.id == 'banque') {
				   				dashboard.label = 'Coordonnées Bancaires';
				   				dashboard.dash={};
				   				dashboard.icone='credit.svg';
				   				dashboard.loaded = $q.defer();
				   			}
				   			return dashboard;
				   		})
				   		
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
		 		if (!$scope.alertes.fai) {
		 			$scope.alertes.fai=[]
		 		}
		 		console.log($scope.alertes);
		 		$scope.alertes.fai.push("Incohérence sur l'adresse");
		 	}
		})
	}

	$scope.dragControlListeners = {
	    orderChanged: function(event) {
	    	var dashToSave = $scope.dashboards.map(function(dash) {
	    		return {id: dash.id, show: dash.show};
	    	})
	    	dataService.saveDashboardConfig(dashToSave);
	    }
	};

	$scope.dashboards=[];
	$scope.alertes={};
	getDashboardsList().then(startChecks);

	$scope.toggleDashboard = function(dashboard) {
		dashboard.show=!dashboard.show;
		var dashToSave = $scope.dashboards.map(function(dash) {
    		return {id: dash.id, show: dash.show};
    	})
    	dataService.saveDashboardConfig(dashToSave);
	}
}



module.exports = dashboardCtrl;