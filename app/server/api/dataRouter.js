var Q = require('q'); 
var express    = require('express');
var passport = require('passport');
var config = require('../utils/appconfig');
var router = express.Router(); 

router.get('/dashboards', function(req,res) {
	res.send([{id:'identite'},{id:'banque'},{id:'fai'},{id:'casier'},{id:'situPro'}]);
});

router.get('/dataset/:dataset/', function(req,res) {
	var dataset = req.params.dataset;
	var q = req.query.q;
	// Normalement appel pour récup les données

	//MOCK
	if (dataset == 'Banque_Coordonnees') {
		getMockBanque().then(function(data) {
			// faux lag
			setTimeout(function() {
				res.send(data);
			}, 2000);
		});
		return;
	}
	if (dataset == 'FAI_Contact') {
		getMockFAI().then(function(data) {
			res.send(data);
		});
		return;
	}
	if (dataset == 'MJ_Casier') {
		getMockCasier().then(function(data) {
			res.send(data);	
		});
		return;
	}
	if (dataset == 'ACOSS_SituationPro') {
		getMockAcoss().then(function(data) {
			// faux lag
			setTimeout(function() {
				res.send(data);	
			}, 1000);
		});
		return;	
	}
	res.status(404).send();
});

router.get('/datasets/:datasets/', function(req,res) {
	var datasets = req.params.datasets.split(',');
	var q = req.query.q;
	// Normalement appel pour récup les données de chaque dataset

	//MOCK
	Q.all([getMockBanque(), getMockFAI(), getMockCasier(), getMockAcoss()]).
		then(function(datas) {
			res.send(datas);
		})
})

var getLabVal = function(label, valeur) {
	return {label: label, valeur: valeur};
}

var getMockBanque = function() {
	var banque={};
	banque.etablissement=getLabVal('Etablissement', 'First Fake Bank');
	banque.bic=getLabVal('BIC', 'FFPAFRPP333');
	banque.iban=getLabVal('IBAN', 'FR76 1333 0101 0202 0303 0406 682');
	return Q.resolve(banque);
}
var getMockFAI = function() {
	var fai={}
	fai.mail=getLabVal('Mail', 'john.doe@gmail.com');
	fai.telFixe=getLabVal('Tel Fixe', '01 02 03 04 05');
	fai.telMobile=getLabVal('Tel Portable', '06 05 06 05 06');
	fai.adresse=getLabVal('Adresse', '79, rue des Lacs 75000 Paris');
	return Q.resolve(fai);
}
var getMockCasier = function() {
	var casier={}
	casier.b2=getLabVal("Existence d'une mention au bulletin B2", "Positif");
	casier.b3=getLabVal("Existence d'une mention au bulletin B3", "Néant");
	return Q.resolve(casier);
}
var getMockAcoss = function() {
	var acoss={}
	acoss.nir=getLabVal("NIR", "2651075879048 43");
	acoss.situation=getLabVal("Situation professionnelle en cours", "Salarié");
	acoss.motifArret=getLabVal("Motif arrêt travail", "Congés suite à accident de travail ou de service");
	acoss.dateDernierJour=getLabVal("Date dernier jour travaillé", "3 mars 2015");
	acoss.dateFinArret=getLabVal("Date fin arrêt prévisionnel", "1 juin 2015");
	acoss.salaireM1=getLabVal("Salaire net mois M-1", "3 500");
	acoss.salaireM2=getLabVal("Salaire net mois M-2", "3 500");
	acoss.salaireM3=getLabVal("Salaire net mois M-3", "3 500");
	return Q.resolve(acoss);
}

module.exports=router;