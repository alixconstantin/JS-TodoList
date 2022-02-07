// récup du tableau html
const table = document.querySelector("#tableauLivres");

// Liste de livres ( objets ) de nase
var l1 = {
    nom: "Les lamas",
    auteur: "ALIX C",
    pages: 200
}
var l2 = {
    nom: "La france du 19ème",
    auteur: "Albert PATRICK",
    pages: 500
}
var l3 = {
    nom: "La monde des animaux",
    auteur: "Marc Merlin",
    pages: 250
}
var l4 = {
    nom: "Le virus D'Asie",
    auteur: "Tya Milo",
    pages: 120
}

// 
var biblio = [l1, l2, l3, l4];
afficherLivres();

function afficherLivres() {


    let tableauLivres = document.querySelector("#tableauLivres tbody");
    let livres = "";
    for (i = 0; i <= biblio.length - 1; i++) {
        livres += ` <tr>
                        <td>${biblio[i].nom}</td>
                        <td>${biblio[i].auteur}</td>
                        <td>${biblio[i].pages}</td>
                        <td><button class="btn btn-warning" onClick="afficherFormModification(${i})">Modifier</button></td>
                        <td><button class="btn btn-danger" onClick="supprimerLivre(${i})">Supprimer</button></td>
                    </tr>`;
    }
    tableauLivres.innerHTML = livres;
}

function supprimerLivre(position){
    if(confirm("Are you sure you want to delete ? ")){
       biblio.splice(position, 1);
        afficherLivres(); 
        alert("book got deleted");
    }
    else{
        alert("Action cancel");
    }
    
}

function afficherFormModification(position){

    document.querySelector("#ajoutForm").className="d-none";

    document.querySelector("#modifLivre").removeAttribute("class");

    document.querySelector("#modifLivre #titre").value = biblio[position].nom;
    document.querySelector('#modifLivre #auteur').value = biblio[position].auteur;
    document.querySelector('#modifLivre #pages').value = biblio[position].pages;
    document.querySelector('#modifLivre #identifiant').value = position;

}

document.querySelector("#validationFormModif").addEventListener('click', function(event){
event.preventDefault();

   let titre = document.querySelector("#modifLivre #titre").value ;
    let auteur = document.querySelector('#modifLivre #auteur').value;
     let pages = document.querySelector('#modifLivre #pages').value ;
    let positionLivre = document.querySelector('#modifLivre #identifiant').value;

    biblio[positionLivre].nom = titre;
    biblio[positionLivre].auteur = auteur;
    biblio[positionLivre].pages = pages;
    afficherLivres();
    document.querySelector("#modifLivre").className = "d-none";
});




function ajoutFormulaire() {
    document.querySelector("#ajoutForm").removeAttribute("class");
    // supprime la classe d-none sur l'ajout

    document.querySelector("#modifLivre").className="d-none";
    // le rajoute sur le modif " -d none" pour éviter doublons
}

document.querySelector('#validationFormAjout').addEventListener("click", function (event) {

    event.preventDefault();
    let nom = document.querySelector("#titre").value;
    let auteur = document.querySelector('#auteur').value;
    let pages = document.querySelector('#pages').value;
    ajoutLivre(nom, auteur, pages);
    document.querySelector('#ajoutForm').reset();
    document.querySelector('#ajoutForm').className = "d-none";

});

function ajoutLivre(nom, auteur, pages) {
    let book = {
        nom: nom,
        auteur: auteur,
        pages: pages
    }

    biblio.push(book);
    afficherLivres();
}