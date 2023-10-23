function ValiderFormulaire() {
    console.log("Dans la methode ValiderFormulaire()");

    let form = document.forms["formulaire"];

    let nom = form["nom"].value;
    let prenom = form["prenom"].value;
    let dateNaissance = form["date-naissance"].value;
    let codePermanent = form["code-permanent"].value;
    let genre = form["genre"].value;

    const dateNaissanceEx = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$'); // créer une expression regulière pour la validation
    const genreEx = new RegExp('^[AFM]$')
    const codePermanentEx = new RegExp('^[A-Z]{4}[0-9]{8}$')

    let validDateNaissanceEx = dateNaissanceEx.test(dateNaissance); // test de la regex
    let validGenreEx = genreEx.test(genre);
    let validCodePermanentEx = codePermanentEx.test(codePermanent);

    let paras = document.getElementsByTagName("p");

    // vide les p contenant les messages d'erreurs
    for( var i = 0; i < paras.length; i ++){
        paras[i].innerHTML = "";
    }

    if (nom == ""){
        document.getElementById("nom-err").innerHTML = "Le nom ne peut être vide";
        document.getElementById("nom-err").style.color = "red"; // peut être initié par css seulement aussi
        validated = false;
    } 
    
    if (prenom == ""){
        document.getElementById("prenom-err").innerHTML = "La prenom ne peut être vide";
        document.getElementById("prenom-err").style.color = "red"; // peut être initié par css seulement aussi
        validated = false;
    } 
    
    if (dateNaissance == ""){
        document.getElementById("date-naissance-err").innerHTML = "La date de naissance ne peut être vide";
        document.getElementById("date-naissance-err").style.color = "red"; // peut être initié par css seulement aussi
        validated = false;
    } else if (!validDateNaissanceEx) {
        // si la regex n'est pas valide, alors afficher un message d'erreur 
        document.getElementById("date-naissance-err").innerHTML = "La date de naissance doit avoir le format AAAA-MM-JJ";
        document.getElementById("date-naissance-err").style.color = "red"; // peut être initié par css seulement aussi
    }
    
    if (codePermanent == ""){
        document.getElementById("code-permanent-err").innerHTML = "Le code permanent ne peut être vide";
        document.getElementById("code-permanent-err").style.color = "red"; // peut être initié par css seulement aussi
        validated = false;
    } if (!validCodePermanentEx) {
        document.getElementById("code-permanent-err").innerHTML = 
            "Le code permanent doit avoir le format suivant: - les 3 premières lettres du nom, sans accent, en majuscules" + 
            "- la première lettre du prénom, sans accent, en majuscule" +
            "- le jour de naissance sur 2 caractères " +
            "- le mois de naissance sur 2 caractères, additionné de 50 si c'est une femme" +
            "- l'année de naissance sur 2 caractères" +
            "- une valeur séquentielle sur 2 caractères, uniquement des chiffres."
        document.getElementById("code-permanent-err").style.color = "red"; 

    }

    if (genre == ""){
        document.getElementById("genre-err").innerHTML = "Le genre ne peut être vide";
        document.getElementById("genre-err").style.color = "red"; // peut être initié par css seulement aussi
        validated = false;
    } if (!validGenreEx) {
        document.getElementById("genre-err").innerHTML = "Le genre doit contenir F, M ou A";
        document.getElementById("genre-err").style.color = "red"; 

    }

    return validated
}

function EnvoyerFormulaire(){
    if(ValiderFormulaire()){
        document.forms["formulaire"].submit();
    }
}