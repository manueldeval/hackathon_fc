
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
		$scope.dashboards.push({label:'Identité', dash:identite, row:2, icone:'profile.svg'});
	}
	var getUserBanque = function() {
		dataService.getFromDataset('Banque_Coordonnees')
		           .then(function(datas) {
		           		$scope.dashboards.push({label:'Coordonnées Bancaires', dash:datas, row:1, icone:'credit.svg'});
		           })
	}
	var getUserFai = function() {
		dataService.getFromDataset('FAI_Contact')
		           .then(function(datas) {
		           		$scope.dashboards.push({label:'FAI', dash:datas, row:1, icone:'fai.svg'});
		           })
	}
	var getUserCasier = function() {
		dataService.getFromDataset('MJ_Casier')
		           .then(function(datas) {
		           		$scope.dashboards.push({label:'Casier Judiciaire', dash:datas, row:1, icone:'casier.svg'});
		           })
	}
	var getUserAcossSituationPro = function() {
		dataService.getFromDataset('ACOSS_SituationPro')
		           .then(function(datas) {
		           		$scope.dashboards.push({label:'Situation professionnelle', dash:datas, row:2, icone:'casier.svg'});
		           })
	}

	$scope.dashboards=[];
	getUserBanque();
	getUserIdentite();
	getUserFai();
	getUserCasier();
	getUserAcossSituationPro();
}



module.exports = dashboardCtrl;