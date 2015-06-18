var definitions =[{
	id : 'identite',
	label : 'Identité',
	icone:'profile.svg',
	dataset:'identite_pivot',
	fields:[
		{ id:'nom_d_usage', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },

		//{ id:'identifiant_bouchon_ameli', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		//{ id:'identifiant_bouchon_dgfip', modifiable:true },
		//{ id:'mot_de_passe_bouchon_dgfip', modifiable:true },
		//{ id:'mot_de_passe_bouchon_ameli', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true }
	]
}, {
	id : 'casier',
	label : 'Casier Judiciaire',
	icone:'casier.svg',
	dataset:'mj_casier',
	fields: [
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'hypothese', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'existence_d_une_mention_au_bulletin_b3', modifiable:true },
		{ id:'existence_d_une_mention_au_bulletin_b2', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true }
	]
}, {
	id : 'situPro',
	label : 'Situation professionnelle',
	icone:'travail.svg',
	dataset:'ACOSS_SituationPro',
	fields: [
		{ id:'s21_g00_30_001_nir', modifiable:true },
		{ id:'hypothese_situation_pro', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'hypothese_rfr', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true },
		{ id:'sexe', modifiable:true }
	]
}, {
	id : 'fai',
	label : 'FAI',
	icone:'fai.svg',
	dataset:'fai_contact',
	fields:[
		{ id:'commune', modifiable:true },
		{ id:'tel_fixe', modifiable:true },
		{ id:'code_postal', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'adresse', modifiable:true },
		{ id:'tel_portable', modifiable:true },
		{ id:'nom_d_usage', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'mail', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true }
	]
},{
	id : 'banque',
	label : 'Coordonnées Bancaires',
	icone:'credit.svg',
	dataset:'banque_coordonnees',
	fields:[ 
		{ id:'iban_1', modifiable:true },
		{ id:'hypothese_coordonnees_bancaires', modifiable:true },
		{ id:'bic_2', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'bic_1', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'etablissement_1', modifiable:true },
		{ id:'iban_2', modifiable:true },
		{ id:'etablissement_2', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true },
		{ id:'sexe', modifiable:true }
	]
},{
	id : 'caf',
	label : 'Infos CAF',
	icone:'credit.svg',
	dataset:'caf_qf',
	fields:[ 
		{ id:'nombre_d_enfants', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'quotient_familial', modifiable:true },
		{ id:'hypothese_caf', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'prestations_caf_mensuelles', modifiable:true },
		{ id:'hypothese_dgfip', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true },
		{ id:'situation_foyer', modifiable:true }
	]
},{
	id: 'dgfip_rp',
	label : 'Résidence principale',
	icone:'house.svg',
	dataset:'dgfip_rp',
	fields:[
		{ id:'commune', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', modifiable:true },
		{ id:'adresse', modifiable:true },
		{ id:'hypothese_dgfip_rp', modifiable:true },
		{ id:'codepostal', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'lieu_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'pays_de_naissance', modifiable:true }
	]
}];
module.exports=definitions;

