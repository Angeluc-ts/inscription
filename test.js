// tableau pour stocker les années scolaires
let annees = [];

// fonction pour ajouter une année scolaire
function ajouterAnnee() {
  // récupérer les données du formulaire
  let annee = document.getElementById("annee").value;
  let montant = parseFloat(document.getElementById("montant").value);
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  // créer un objet année scolaire
  let nouvelleAnnee = {
    annee: annee,
    montant: montant,
    nom: nom,
    prenom: prenom
  };

  // ajouter l'objet à notre tableau d'années scolaires
  annees.push(nouvelleAnnee);

  // effacer le contenu du formulaire
  document.getElementById("annee").value = "";
  document.getElementById("montant").value = "";
  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";

  // mettre à jour la liste des années scolaires affichée sur la page
  afficherAnnees();
}

// fonction pour afficher toutes les années scolaires dans une liste à puces
function afficherAnnees() {
  let listpayement = document.getElementById("listpayement");
  listpayement.innerHTML = "";

  // récupérer la valeur sélectionnée dans le select avec l'id "parcour"
  let selectElement = document.getElementById("parcour");
  let selectedValue = selectElement.value;

  // si une option est sélectionnée, afficher les éléments de la liste correspondants à cette option
  if (selectedValue == "Licence") {
    for (let i = 0; i < annees.length; i++) {
      let annee = annees[i];
      let montant = annee.montant;
      let nom = annee.nom;
      let prenom = annee.prenom;

      if (montant < 500000) {
        let paye = 500000 - montant;
        let elementLi = document.createElement("li");
        let contenuLi = document.createTextNode(nom + " " + prenom + " vous venez de payer votre frais de scolarité le " + annee.annee + " de montant :  " + montant + " Ar" + " il reste " + paye + " Ar à payer .");

        elementLi.appendChild(contenuLi);
        listpayement.appendChild(elementLi);
      }
       else if (montant === 500000) {
        let elementLi = document.createElement("li");
        let contenuLi = document.createTextNode(nom + " " + prenom + ", vous venez de payer intégralement votre frais de scolarité de montant " + montant + " Ar le " + annee.annee + " ." );
        elementLi.appendChild(contenuLi);
        listpayement.appendChild(elementLi);
      }
      else if (montant > 500000 ){

        alert("On ne peut malheuresement pas accépter plus d'argents que l'on a besoin désolé .");
      }
    }
  }
  else if (selectedValue == "Master"){
	for (let i = 0; i < annees.length; i++) {
      let annee = annees[i];
      let montant = annee.montant;
      let nom = annee.nom;
      let prenom = annee.prenom;

      if (montant < 800000) {
        let paye = 800000 - montant;
        let elementLi = document.createElement("li");
        let contenuLi = document.createTextNode(nom + " " + prenom + " vous venez de payer votre frais de scolarité le " + annee.annee + " de montant :  " + montant + " Ar" + " il reste " + paye + " Ar à payer .");

        elementLi.appendChild(contenuLi);
        listpayement.appendChild(elementLi);
      }
       else if (montant === 800000) {
        let elementLi = document.createElement("li");
        let contenuLi = document.createTextNode(nom + " " + prenom + ", vous venez de payer intégralement votre frais de scolarité de montant " + montant + " Ar le " + annee.annee + " . ");
        elementLi.appendChild(contenuLi);
        listpayement.appendChild(elementLi);
      }
      else if (montant > 800000 ){

        alert("On ne peut malheuresement pas accépter plus d'argents que l'on a besoin désolé .");
      }
    }
  }
  else{
	let elementLi = document.createElement("li");
        let contenuLi = document.createTextNode("rien n'est selectionner.");
        elementLi.appendChild(contenuLi);
        listpayement.appendChild(elementLi);
  }
}


