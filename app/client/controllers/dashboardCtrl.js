
var dashboardCtrl = function($scope, $location, dataService){
	var getLabVal = function(label, valeur) {
		return {label: label, valeur: valeur};
	}
	var getUserIdentite = function() {
		var identite={};
		identite.civilite=getLabVal('Civilite', $scope.app.user.civilite);
	  	identite.nom=getLabVal('Nom', $scope.app.user.family_name);
	  	identite.prenom=getLabVal('Prénom', $scope.app.user.given_name);
	  	identite.birthdate=getLabVal('Date de naissance', $scope.app.user.birthdate);
		identite.address=getLabVal('Adresse', $scope.app.user.address);
		identite.phone=getLabVal('Téléphone', $scope.app.user.phone_number);
		$scope.dashboards.push({id:'identite', label:'Identité', dash:identite, row:2, icone:'profile.svg'});
	}
	var getUserBanque = function() {
		var dashboard = {id:'banque', label:'Coordonnées Bancaires', dash:{}, loading:true, row:1, icone:'credit.svg'};
		$scope.dashboards.push(dashboard);
		dataService.getFromDataset('Banque_Coordonnees')
		           .then(function(datas) {
		           		dashboard.dash = datas;
		           		delete dashboard.loading;
		           })
	}
	var getUserFai = function() {
		var dashboard = {id:'fai', label:'FAI', dash:{}, loading:true, row:1, icone:'fai.svg'}
		$scope.dashboards.push(dashboard);
		dataService.getFromDataset('FAI_Contact')
		           .then(function(datas) {
		           		dashboard.dash = datas;
		           		delete dashboard.loading;
		           })
	}
	var getUserCasier = function() {
		var dashboard = {id:'casier', label:'Casier Judiciaire', dash:{}, loading:true, row:1, icone:'casier.svg'}
		$scope.dashboards.push(dashboard);
		dataService.getFromDataset('MJ_Casier')
		           .then(function(datas) {
		           		dashboard.dash = datas;
		           		delete dashboard.loading;
		           })
	}
	var getUserAcossSituationPro = function() {
		var dashboard = {id:'situPro', label:'Situation professionnelle', dash:{}, loading:true, row:2, icone:'travail.svg'}
		$scope.dashboards.push(dashboard);
		dataService.getFromDataset('ACOSS_SituationPro')
		           .then(function(datas) {
		           		dashboard.dash = datas;
		           		delete dashboard.loading;
		           })
	}

	$scope.dragControlListeners = {
	    containment: '#sortable-container'
	};

	$scope.dashboards=[];
	getUserIdentite();
	getUserBanque();
	getUserFai();
	getUserCasier();
	getUserAcossSituationPro();
}



module.exports = dashboardCtrl;