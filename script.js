// Creation de la Class 

class Voiture {
    constructor(marque, modele, annee, couleur) {
      this.marque = marque;
      this.modele = modele;
      this.annee = annee;
      this.couleur = couleur;
    }
  
afficherDetails() {
  const details = {
    Marque: this.marque,
    Modèle: this.modele,
    Année: this.annee,
    Couleur: this.couleur
  };
  console.table(details);
}

    
  }
  
  // Exemple d'utilisation de la classe
  const maVoiture = new Voiture("Toyota", "Corolla", 2022, "Noir");
  maVoiture.afficherDetails();



// Ajout du Garage


  class Garage {
  constructor() {
    this.voitures = [];
  }

  ajouterVoiture(voiture) {
    this.voitures.push(voiture);
  }



// Filtre par Annee 
  afficherVoituresParAnnee(annee) {
    const voituresFiltrees = this.voitures.filter(voiture => voiture.annee === annee);
    this.afficherListeVoitures(voituresFiltrees);
  }



// Filtre par Marque 
  afficherVoituresParMarque(marque) {
    const voituresFiltrees = this.voitures.filter(voiture => voiture.marque === marque);
    this.afficherListeVoitures(voituresFiltrees);
  }



// Filtre par recherche 
  afficherVoituresParMarqueTroisLettres(lettres) {
    const voituresFiltrees = this.voitures.filter(voiture => voiture.marque.includes(lettres));
    this.afficherListeVoitures(voituresFiltrees);
  }

  afficherListeVoitures(voitures) {
    if (voitures.length === 0) {
      console.log("Aucune voiture ne correspond aux critères.");
    } else {
      console.log("Voitures correspondantes :");
      voitures.forEach(voiture => {
        voiture.afficherDetails();
        console.log("-----------------------");
      });
    }
  }
}

// Exemple

//Declare le garage
const garage = new Garage();

//Declare les vehicules 
const voiture1 = new Voiture("Toyota", "Corolla", 2020, "Noir");
const voiture2 = new Voiture("Renault", "Clio", 2019, "Rouge");
const voiture3 = new Voiture("Peugeot", "208", 2021, "Blanc");
const voiture4 = new Voiture("Toyota", "Yaris", 2021, "Bleu");
const voiture5 = new Voiture("Audi", "A3", 2020, "Gris");

// Ajoute les vehicules au garage
garage.ajouterVoiture(voiture1);
garage.ajouterVoiture(voiture2);
garage.ajouterVoiture(voiture3);
garage.ajouterVoiture(voiture4);
garage.ajouterVoiture(voiture5);

// Affiche les voitures de 2021
console.log("Voitures de l'année 2021 :");
garage.afficherVoituresParAnnee(2021);

// Affiche les voitures Toyota
console.log("Voitures de la marque Toyota :");
garage.afficherVoituresParMarque("Toyota");

const lettresUtilisateur = "oyo";
console.log(`Voitures avec une marque contenant les lettres "${lettresUtilisateur}" :`);
garage.afficherVoituresParMarqueTroisLettres(lettresUtilisateur);
