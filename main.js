const linksSocialMedia = {
  github: 'kngVitor',
  youtube: 'maykbrito',
  facebook: '100002310382909',
  instagram: '__carvalhov',
  twitter: 'Crvlh_Vitor'
}

function changeSocialMediaLinks() {
  for (let li of socialLInks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
