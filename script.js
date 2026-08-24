// On attend que toute la page soit chargée avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    
    // On récupère tous les boutons de filtres et toutes les images de la galerie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Pour chaque bouton, on ajoute un événement "au clic"
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 1. On retire la classe 'active' de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. On ajoute la classe 'active' au bouton qui vient d'être cliqué
            this.classList.add('active');

            // 3. On récupère la catégorie du bouton cliqué (ex: 'logo', 'cars' ou 'all')
            const filterValue = this.getAttribute('data-filter');

            // 4. On trie les éléments de la galerie
            galleryItems.forEach(item => {
                // Si le filtre est "all" OU que la catégorie de l'image correspond au bouton
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide'); // On affiche
                } else {
                    item.classList.add('hide'); // On cache
                }
            });
        });
    });

});