// loader.js
document.addEventListener("DOMContentLoaded", function() {

    // 1. On cherche l'endroit où afficher le menu
    const menuContainer = document.getElementById("menu-placeholder");

    if (menuContainer) {
        // 2. On va chercher le fichier
        fetch("/layout/nav.html")
            .then(response => {
                if (!response.ok) throw new Error("Erreur chargement menu");
                return response.text();
            })
            .then(html => {
                // 3. On l'injecte dans la page
                menuContainer.innerHTML = html;
            })
            .catch(error => console.error("Problème :", error));
    }
});