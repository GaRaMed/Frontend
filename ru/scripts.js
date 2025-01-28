document.addEventListener('DOMContentLoaded', function() {
    const mediumRSSFeed = 'https://medium.com/feed/@garamed';
    const mediumContainer = document.getElementById('medium-articles');

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumRSSFeed}`)
        .then(response => response.json())
        .then(data => {
            const articles = data.items.slice(0, 2); // Get the latest 2 articles
            let output = '';

            articles.forEach(article => {
                output += `
                    <div class="article">
                        <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
                        <p>${article.description}</p>
                    </div>
                `;
            });

            mediumContainer.innerHTML = output;
        })
        .catch(error => console.log('Error fetching Medium RSS feed:', error));
});
