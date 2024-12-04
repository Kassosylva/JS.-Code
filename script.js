//j'ai utilisé console.log pour afficher un message dans le navigateur.
console.log("Bienvenue dans votre gestionnaire de taches!")

//j'ai créé une variable de nombre entier et l'afficher
const nombresEntier = 5;
console.log(nombresEntier)

//condition: Vérifier si le nombre de taches est zero

let verifierNombreDeTaches = 0;

if (verifierNombreDeTaches === 0){
    console.log("vrai");
} else {
    console.log("faux");
 }

 //Ajouter une tache à une liste(Tableau)

 let tableau = [];
 tableau[tableau.length] = "vin";
 console.log(tableau);
 
//Afficher toutes les taches

tableauTaches = ["stylo", "vin", "ivoire"];

for (let i = 0; i < tableauTaches.length; i++){
    console.table(tableauTaches[i]);
}

//Ajouter une tache
let listeTaches = [];

 function ajouterTache(tache){
    listeTaches.push(tache)
    afficherTaches();
 }
 
 function afficherTaches(){
    if (listeTaches.length === 0){
        console.log("Aucune tache ajouter");
    } else {
        console.log("Une tache est ajoutée");
        console.table(listeTaches);
     }
  } 
 ajouterTache("lunette");
 ajouterTache("cahier")
 ajouterTache("stylo")

  //suprimer la dernier tache

let tableauElements = [60, 700, 18, 400];

tableauElements.pop()
console.log("Suppression du dernier élément du tableau");
console.table(tableauElements);

//Modifie une tache spécifique dansle tableauen utilisant l'index de l'élément.

let table = [12, 4, 43, 20];
