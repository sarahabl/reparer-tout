<script>
    const stats = document.querySelectorAll('.stat-item h2');
    const increment = 1; // Valeur d'incrémentation (vous pouvez ajuster selon vos besoins)

    function compteur() {
        stats.forEach(stat => {
            const cible = parseInt(stat.innerText);
            const étape = Math.ceil(cible / 100); // Divisez la cible par le nombre d'étapes souhaité

            let valeurActuelle = 10;
            const intervalle = setInterval(() => {
                valeurActuelle += étape;
                stat.innerText = valeurActuelle;

                if (valeurActuelle >= cible) {
                    clearInterval(intervalle);
                    stat.innerText = cible; // Assurez-vous que la valeur finale est exacte
                }
            }, 10); // Réglez l'intervalle de mise à jour (en millisecondes)
        });
    }

    // Appelez la fonction pour démarrer le compteur lorsque la page se charge
    window.addEventListener('load', compteur);
</script>