// script.js

// Fonction de validation du formulaire
function validerFormulaire() {
  // Récupérer l'élément du champ email et le conteneur des messages d'erreur
  let champEmail = document.getElementById("email");
  let errorMessages = document.getElementById("errorMessages");
  // Effacer tous les messages d'erreur existants
  errorMessages.innerHTML = "";

  // Valider le champ email
  if (champEmail.value.trim() === "") {
    // Si l'email est vide, afficher un message d'erreur
    afficherErreur("Veuillez entrer votre adresse e-mail");
    // Retourner false pour indiquer une validation incorrecte
    return false;
  }

  // Retourner true si la validation réussit
  return true;
}

// Fonction pour afficher un message d'erreur
function afficherErreur(message) {
  // Récupérer le conteneur des messages d'erreur
  let errorMessages = document.getElementById("errorMessages");
  // Créer un nouveau div pour le message d'erreur
  let errorDiv = document.createElement("div");
  // Définir le contenu du div d'erreur avec le message fourni
  errorDiv.innerHTML = message;
  // Ajouter le div d'erreur au conteneur des messages d'erreur
  errorDiv.classList.add("error-message"); // Ajouter une classe pour les styles CSS (si nécessaire)
  errorMessages.appendChild(errorDiv);
}

// Ajouter un écouteur d'événements à la soumission du formulaire
document
  .querySelector("#sign-up form")
  .addEventListener("submit", function (e) {
    // Appeler la fonction de validation, et si elle retourne false, empêcher la soumission du formulaire
    if (!validerFormulaire()) {
      e.preventDefault();
    } else if (validerFormulaire() == true) {
      console.log("sa marche");
    }
  });

// Message de confirmation dans la console pour vérifier que le script est bien chargé
console.log("Le script JavaScript est bien chargé !");
