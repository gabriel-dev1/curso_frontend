document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('img')
    const name = document.getElementById('name')
    const username = document.getElementById('username')
    const repository = document.getElementById('repository')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const link = document.getElementById('link')

    fetch('https://api.github.com/users/gabriel-dev1').then(function(result) {
        return result.json()
    }).then(function(json) {
        img.src = json.avatar_url
        name.innerText = json.name
        username.innerText = `@${json.login}`
        repository.innerText = json.public_repos
        followers.innerText = json.followers
        following.innerText = json.following
        link.href = json.html_url
    })
})