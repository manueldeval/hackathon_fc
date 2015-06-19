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
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'existence_d_une_mention_au_bulletin_b2', label:"Mention au B2", modifiable:true },
		{ id:'existence_d_une_mention_au_bulletin_b3', label:"Mention au B3", modifiable:true },
		{ id:'hypothese', modifiable:true }
	]
}, {
	id : 'situPro',
	label : 'Situation professionnelle',
	icone:'travail.svg',
	dataset:'ACOSS_SituationPro',
	fields: [
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'s21_g00_30_001_nir', label:'N° SS', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance',label:"Lieu de naissance",  modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'hypothese_situation_pro', label:"Info situation", modifiable:true },
		{ id:'hypothese_rfr', label:"Hypothèse", modifiable:true }
	]
}, {
	id : 'fai',
	label : 'FAI',
	icone:'fai.svg',
	dataset:'fai_contact',
	fields:[
		{ id:'nom_d_usage', modifiable:true },
		{ id:'nom_de_naissance', modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'date_de_naissance', label:'Date de naissance' , modifiable:true },
		{ id:'lieu_de_naissance', label:'Lieu de naissance', modifiable:true },
		{ id:'pays_de_naissance', label:'Pays de naissance', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'adresse', modifiable:true },
		{ id:'code_postal', label :'Code postal', modifiable:true },
		{ id:'commune', modifiable:true },
		{ id:'tel_fixe', modifiable:true },
		{ id:'tel_portable', modifiable:true },
		{ id:'mail', modifiable:true }
	]
},{
	id : 'banque',
	label : 'Coordonnées Bancaires',
	icone:'credit.svg',
	dataset:'banque_coordonnees',
	fields:[ 
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'etablissement_1', modifiable:true },
		{ id:'iban_1', modifiable:true },
		{ id:'bic_1', modifiable:true },
		{ id:'etablissement_2', modifiable:true },
		{ id:'iban_2', modifiable:true },
		{ id:'bic_2', modifiable:true },
		{ id:'hypothese_coordonnees_bancaires', modifiable:true }
	]
},{
	id : 'caf',
	label : 'Infos CAF',
	icone:'credit.svg',
	dataset:'caf_qf',
	fields:[ 
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'quotient_familial', label:"Quotient familial", modifiable:true },
		{ id:'hypothese_caf', label:"Info", modifiable:true },
		{ id:'prestations_caf_mensuelles', label:"Prestation mensuelles", modifiable:true },
		{ id:'hypothese_dgfip', label:"hypothèse DGFIP", modifiable:true },
		{ id:'nombre_d_enfants', label:"Nb enfants", modifiable:true },
		{ id:'situation_foyer', label:"Situation foyer", modifiable:true }
	]
},{
	id: 'dgfip_rp',
	label : 'Résidence principale',
	icone:'house.svg',
	dataset:'dgfip_rp',
	fields:[
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'adresse', modifiable:true },
		{ id:'codepostal', modifiable:true },
		{ id:'commune', modifiable:true },
		{ id:'hypothese_dgfip_rp', label:"Hypothèse DGFIP", modifiable:true }
	]
},{
	id: 'ants_identite',
	label : "Pièces d'identité",
	icone:'identite.svg',
	dataset:'ants_identite',
	fields:[
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'numero_cni', label:"N° CNI", modifiable:true },
		{ id:'date_delivrance_cni', label:"Date CNI", modifiable:true },
		{ id:'numero_passeport', label:"N° Passeport", modifiable:true },
		{ id:'date_delivrance_passeport', label:"Date passport", modifiable:true },
		{ id:'couleur_des_yeux', label:"Couleur des yeux", modifiable:true },
		{ id:'taille', label:"Taille", modifiable:true },
		{ id:'hypothese_documents_d_identite', label:"Hypothese", modifiable:true }
	]
},{
	id: 'men_diplomes',
	label : "Diplômes",
	icone:'graduate.svg',
	dataset:'men_diplomes',
	fields:[
		{ id:'nom_de_naissance', label:"Nom de naissance", modifiable:true },
		{ id:'prenoms', modifiable:true },
		{ id:'sexe', modifiable:true },
		{ id:'date_de_naissance', label:"Date de naissance", modifiable:true },
		{ id:'lieu_de_naissance', label:"Lieu de naissance", modifiable:true },
		{ id:'pays_de_naissance', label:"Pays de naissance", modifiable:true },
		{ id:'mention', modifiable:true },
		{ id:'academie_d_origine', label:"Academie", modifiable:true },
		{ id:'session', modifiable:true },
		{ id:'examen', label:"Examen", modifiable:true }
	]
}];
module.exports=definitions;

