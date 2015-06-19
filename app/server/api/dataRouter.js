var Q = require('q'); 
var express    = require('express');
var passport = require('passport');
var config = require('../utils/appconfig');
var router = express.Router();
var redis = require('../utils/redis');
var ods = require('../utils/opendatasoft');
var _ = require('lodash');

var REDIS_CONFIG_DASHBOARD_KEY = "dashboards";
var REDIS_CONFIG_CORRECTION_KEY = "correction";
var defaultRedisConfig = [{id:'identite', show:true},
	             		  {id:'banque', show:true},
	              		  {id:'fai', show:true},
	             		  {id:'casier', show:true},
	             	      {id:'situPro', show:true},
	             	      {id:'caf',show:true},
	             	      {id:'ants_identite',show:true},
	             	      {id:'men_diplomes',show:true},
	             	      {id:'dgfip_rp',show:true}];


router.get('/corrections', function(req,res) {
	if (req.session.passport.user) {
		var user = req.session.passport.user._json;
		redis.hget(REDIS_CONFIG_CORRECTION_KEY, user.given_name + '$' + user.family_name, function(err, corrections) {
			if (err) {
				return;
			}
			if (corrections == null) {
				return;
			}
			console.log(corrections)
			res.send(corrections);
			return;
		})
	} else {
		return;
	}
});

router.post('/corrections', function(req, res) {
	if (req.session.passport.user) {
		var body = req.body;
		var user = req.session.passport.user._json;
		//identifiant utilisateur à redéfinir
	
		
		redis.hget(REDIS_CONFIG_CORRECTION_KEY, user.given_name + '$' + user.family_name, function(err, dashboards) {
			var jsonValue = [];
			if(dashboards !== null){
				jsonValue = JSON.parse(dashboards);
			}
			
			jsonValue.push(body);
			jsonString = JSON.stringify(jsonValue);
			redis.hset(REDIS_CONFIG_CORRECTION_KEY, user.given_name + '$' + user.family_name, jsonString);
		});		
		res.status(200).send();
		return;
	} else {
		res.status(200).send();
		return;
	}
});




router.get('/dashboards', function(req,res) {
	if (req.session.passport.user) {
		var user = req.session.passport.user._json;
		redis.hget(REDIS_CONFIG_DASHBOARD_KEY, user.given_name + '$' + user.family_name, function(err, dashboards) {
			if (err) {
				res.send(defaultRedisConfig);
				return;
			}
			if (dashboards == null) {
				res.send(defaultRedisConfig);
				return;
			}
			var dashboards = JSON.parse(dashboards);
			var userDashboard = defaultRedisConfig.map(function(definedWidget){
				var existsInUserDash = _.find(dashboards,function(dash){ 
					return dash.id == definedWidget.id 
				});
				if (existsInUserDash){
					return existsInUserDash;
				} else {
					return definedWidget;
				}
			});
			res.send(userDashboard);
			return;
		})
	} else {
		res.send(defaultRedisConfig);
		return;
	}
});

router.post('/dashboard', function(req, res) {
	if (req.session.passport.user) {
		var body = req.body;
		var user = req.session.passport.user._json;

		//identifiant utilisateur à redéfinir
		redis.hset(REDIS_CONFIG_DASHBOARD_KEY, user.given_name + '$' + user.family_name, JSON.stringify(body));
		res.status(200).send();
		return;
	} else {
		res.status(200).send();
		return;
	}
});

router.get('/dataset/:dataset/', function(req,res) {
	var dataset = req.params.dataset;
	var q = req.query.q;
	// Normalement appel pour récup les données
	ods.getData(req.session.passport.user.accessToken,dataset.toLowerCase())
		.then(function(data){
			res.send(data);
		})
		.fail(function(err) {
			res.status(404).send(err);
		});
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
