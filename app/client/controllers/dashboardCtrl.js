
var dashboardCtrl = function($scope, $location, dataService){
	
	var getDashboardsList = function() {
		return dataService.getDashboardsList()
				   .then(function(dashboards) {
				   		return dashboards.map(function(dashboard) {
				   			if (dashboard.id == 'identite') {
				   				return {id:'identite', label:'Identité', dash:{}, show:true, row:2, icone:'profile.svg'};
				   			}
				   			if (dashboard.id == 'casier') {
				   				return {id:'casier', label:'Casier Judiciaire', dash:{}, show:true, row:1, icone:'casier.svg'}
				   			}
				   			if (dashboard.id == 'situPro') {
				   				return {id:'situPro', label:'Situation professionnelle', dash:{}, show:true, row:2, icone:'travail.svg'};
				   			}
				   			if (dashboard.id == 'fai') {
				   				return {id:'fai', label:'FAI', dash:{}, show:true, row:1, icone:'fai.svg'};
				   			}
				   			if (dashboard.id == 'banque') {
				   				return {id:'banque', label:'Coordonnées Bancaires', dash:{}, show:true, row:1, icone:'credit.svg'};
				   			}
				   		})
				   		
				   })
	}

	$scope.dragControlListeners = {
	    containment: '#sortable-container'
	};

	$scope.dashboards=[]
	getDashboardsList()
		.then(function(dashboards) {
			$scope.dashboards = dashboards;
		});

	$scope.toggleDashboard = function(dashboard) {
		dashboard.show=!dashboard.show;
	}
}



module.exports = dashboardCtrl;