function initLabelsAnimation() {
    // Sélectionnez les champs de saisie et les étiquettes dans la partie spécifique
    const inputs = document.querySelectorAll('.two-box .box-input input');
    const labels = document.querySelectorAll('.two-box .box-input span');

    // Parcourez chaque champ de saisie et son étiquette correspondante
    inputs.forEach((input, index) => {
        const label = labels[index];
        
        // Ajoutez un écouteur d'événements de saisie à chaque champ de saisie
        input.addEventListener('input', () => {
            // Si le champ de saisie est vide, réinitialisez la translation de l'étiquette
            if (input.value === '') {
                label.style.transform = 'translateY(0)';
            } else {
                // Sinon, déplacez l'étiquette vers le haut
                label.style.transform = 'translateY(-32px)';
            }
        });
    });
}

// Appelez la fonction pour initialiser l'animation des étiquettes dans la partie spécifique
initLabelsAnimation();

