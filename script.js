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

 let listeTaches = [];

 function ajouterTache(tache){
    listeTaches.push(tache)
    afficherTaches()
 }
 
 function afficherTaches(){
    if (listeTaches.length === 0){
        console.log("Aucune tache ajouter");
    } else {
        console.log("Une tache est ajoutée");
        console.log(listeTaches);
     }
  } 
 ajouterTache("lunette");
 ajouterTache("cahier")
 ajouterTache("stylo")
 
