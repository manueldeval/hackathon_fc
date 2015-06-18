
var correctionCtrl = function($scope, $location, $routeParams , dataService){
	
	var getDashboard = function() {
		return dataService.getDashboardsList()
				   .then(function(dashboards) {
					   var mapElm =  dashboards.map(function(dashboard) {
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
				   		});
					   
					   
					   for(i = 0; i<dashboards.length; i++) {
						   if (dashboards[i].id === $routeParams.id) {
							   return dashboards[i]
						   }
					   }
				   })
	}
	
	$scope.dashboard={}
	getDashboard()
		.then(function(dashboard) {
			$scope.dashboard = dashboard;
		});

}



module.exports = correctionCtrl;