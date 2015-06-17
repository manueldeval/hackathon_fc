var identiteDashboardCtrl = function($scope, dataService){
	
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
		$scope.dashboard.dash=identite;
	}

	getUserIdentite();
}

module.exports = identiteDashboardCtrl;