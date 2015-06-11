
var dashboardCtrl = function($scope, $location){
	var getUserIdentite = function() {
		var identite={};
		identite.civilite=getLabVal('Civilite', $scope.app.user.civilite);
	  	identite.nom=getLabVal('Nom', $scope.app.user.family_name);
	  	identite.prenom=getLabVal('Prénom', $scope.app.user.given_name);
	  	identite.birthdate=getLabVal('Date de naissance', $scope.app.user.birthdate);
		identite.address=getLabVal('Adresse', $scope.app.user.address);
		identite.phone=getLabVal('Téléphone', $scope.app.user.phone_number);
		return identite;
	}
	var getUserBanque = function() {
		var banque={};
		banque.etablissement=getLabVal('Etablissement', 'First Fake Bank');
	  	banque.bic=getLabVal('BIC', 'FFPAFRPP333');
	  	banque.iban=getLabVal('IBAN', 'FR76 1333 0101 0202 0303 0406 682');
		return banque;
	}

  	if (!$scope.app.authentified) {
  		$location.path("/accueil");
  	} else {
  		$scope.dashboards=[];
  		$scope.dashboards.push({label:'Identité', dash:getUserIdentite(), row:2, icone:'profile.svg'});
  		$scope.dashboards.push({label:'Banque', dash:getUserBanque(), row:1, icone:'credit.svg'});
  	}
}

var getLabVal = function(label, valeur) {
	return {label: label, valeur: valeur};
}

module.exports = dashboardCtrl;