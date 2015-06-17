
var dashboardCtrl = function($scope, $location, dataService){
	
	var getDashboardsList = function() {
		return dataService.getDashboardsList()
				   .then(function(dashboards) {
				   		return dashboards.map(function(dashboard) {
				   			if (dashboard.id == 'identite') {
				   				dashboard.label = 'Identité';
				   				dashboard.dash={};
				   				dashboard.icone='profile.svg';
				   			}
				   			if (dashboard.id == 'casier') {
				   				dashboard.label = 'Casier Judiciaire';
				   				dashboard.dash={};
				   				dashboard.icone='casier.svg';
				   			}
				   			if (dashboard.id == 'situPro') {
				   				dashboard.label = 'Situation professionnelle';
				   				dashboard.dash={};
				   				dashboard.icone='travail.svg';
				   			}
				   			if (dashboard.id == 'fai') {
				   				dashboard.label = 'FAI';
				   				dashboard.dash={};
				   				dashboard.icone='fai.svg';
				   			}
				   			if (dashboard.id == 'banque') {
				   				dashboard.label = 'Coordonnées Bancaires';
				   				dashboard.dash={};
				   				dashboard.icone='credit.svg';
				   			}
				   			return dashboard;
				   		})
				   		
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

	$scope.dashboards=[]
	getDashboardsList()
		.then(function(dashboards) {
			$scope.dashboards = dashboards;
		});

	$scope.toggleDashboard = function(dashboard) {
		dashboard.show=!dashboard.show;
		var dashToSave = $scope.dashboards.map(function(dash) {
    		return {id: dash.id, show: dash.show};
    	})
    	dataService.saveDashboardConfig(dashToSave);
	}
}



module.exports = dashboardCtrl;