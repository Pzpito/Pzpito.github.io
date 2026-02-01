document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById("menu-placeholder");

    if (menuContainer) {
        fetch("/layout/nav.html")
            .then(response => {
                if (!response.ok) throw new Error("Erreur chargement menu");
                return response.text();
            })
            .then(html => {
                menuContainer.innerHTML = html;
            })
            .catch(error => console.error("Problème :", error));
    }
});