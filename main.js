document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar')
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link')

    fetch('https://api.github.com/users/AnthonyAmaz3d')
    .then(function(res) {
        return res.json();
    }) 
    .then (function(json) {
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url;
    })
})