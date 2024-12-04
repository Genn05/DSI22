document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('news-list');
    
    // URL de l'API NASA (Astronomy Picture of the Day)
    const nasaApiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    // Fonction pour récupérer les actualités de la NASA
    function fetchNews() {
        fetch(nasaApiUrl)
            .then(response => response.json())
            .then(data => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                const title = document.createElement('h3');
                title.textContent = data.title;
                newsItem.appendChild(title);

                const explanation = document.createElement('p');
                explanation.textContent = data.explanation;
                newsItem.appendChild(explanation);

                const image = document.createElement('img');
                image.src = data.url;
                image.alt = data.title;
                newsItem.appendChild(image);

                newsContainer.appendChild(newsItem);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des actualités :', error);
            });
    }

    // Charger les actualités dès que la page est prête
    fetchNews();

    // Gérer le changement de thème (mode clair/sombre)
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        // Changer le texte du bouton selon le thème actif
        if (document.body.classList.contains('light-theme')) {
            document.getElementById('theme-toggle').textContent = '🌙 Mode Sombre';
        } else {
            document.getElementById('theme-toggle').textContent = '☀️ Mode Clair';
        }
    });
});
