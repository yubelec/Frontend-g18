const imgProfile= document.querySelector('#img-profile');
const githubName = document.querySelector('#github-name');
const githubUsername = document.querySelector('#github-username');
const githubBio = document.querySelector('#github-bio');
const githubJoined = document.querySelector('#github-joined');
const githubRepos = document.querySelector('#github-repos');
const githubFollowers = document.querySelector('#github-followers');
const githubFollowing = document.querySelector('#github-folowing');
const githubTwitter = document.querySelector('#github-twitter');
const githubLocation = document.querySelector('#github-location');

const githubActionSearch = document.querySelector('#github-action-search');
const githubInputSearch = document.querySelector('#github-search');

githubActionSearch.onclick =()=>{
        const username = githubInputSearch.value;
        githubInputSearch.value = "";
        if(username ===""){
            Swal.fire({
                title:"error",
                text:"debes llenar el campo usuario",
                icon:"error"
            });
            return;
        }
    obtenerDatosGithub(username);   
};
githubInputSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obtenerDatosGithub(event.target.value);
    }
})

const obtenerDatosGithub = async(username="yubelec")=>{

    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title: "Error",
            text: "No se encontro el usuario",
            icon: "error",
        });
        return;
    }
    setDataUser(data)

};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}

const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubUsername.innerHTML = '@'+data.login;
    githubBio.innerHTML = data.bio;
    githubJoined.innerHTML = formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubTwitter.innerHTML = data.twitter_username;
    githubLocation.innerHTML = data.location;
}

obtenerDatosGithub()
