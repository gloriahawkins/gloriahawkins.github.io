document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/yourusername/repos')
    .then(response => response.json())
    .then(data => {
        const repoContainer = document.getElementById('github-repos');
        repoContainer.innerHTML = '';

        data.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            repoContainer.appendChild(repoDiv);
        });
    })
    .catch(error => console.log(error));
});
