// Compteur pour suivre le nombre de paragraphes ajoutés
let i = 5; // 5 car il y a déjà 4 paragraphes

// Sélectionnez le bouton Ajoute
const addButton = document.querySelector('#addButton');

// Ajoutez un écouteur d'événements au bouton Ajoute
addButton.addEventListener('click', function() {
    // Créez un nouvel élément de paragraphe
    const newParagraph = document.createElement('p');

    // Définissez le texte du paragraphe
    newParagraph.textContent = 'paragraphe ' + i;

    // Définissez l'attribut id du paragraphe
    newParagraph.id = 'p' + i;

    // Ajoutez le nouveau paragraphe au corps du document
    document.body.appendChild(newParagraph);

    // Incrémentez le compteur
    i++;
});

// Sélectionnez le bouton Echange
const exchangeButton = document.querySelector('#exchangeButton');

// Ajoutez un écouteur d'événements au bouton Echange
exchangeButton.addEventListener('click', function() {
    // Sélectionnez le conteneur de paragraphes et tous les paragraphes
    const paragraphContainer = document.querySelector('#paragraphContainer');
    const paragraphs = paragraphContainer.querySelectorAll('p');

    // Créez un tableau à partir des paragraphes
    const paragraphsArray = Array.from(paragraphs);

    // Supprimez les paragraphes existants
    paragraphsArray.forEach(paragraph => paragraph.remove());

    // Inversez l'ordre du tableau
    const reversedParagraphs = paragraphsArray.reverse();

    // Ajoutez les paragraphes inversés au conteneur de paragraphes
    reversedParagraphs.forEach(paragraph => paragraphContainer.appendChild(paragraph));
});