const links_social_media = { // Objeto contendo as informações do usuario
  youtube: 'rocketseat',
  github: 'lucas-re',
  facebook: 'lluccasreis',
  instagram: 'lluccasreis',
  twitter: 'rocketseat'
}


function change_social_media_links() { // função que muda as informações das redes sociais
  for(let li of social_links.children) {
    var social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links_social_media[social]}`
    
  }
}  
change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url).then(response => response.json()).then(data => {
    user_name.textContent = data.name
    user_bio.textContent = data.bio
    personal_image.src = data.avatar_url
    user_link_profile.href = data.html_url
    name_user_github.textContent = data.login
  })
}
get_github_profile_infos()