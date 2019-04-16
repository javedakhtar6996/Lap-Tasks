const userProfile = profile => {
const user = document.querySelector("#user").value;
fetch("https://api.github.com/users/" + user)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    document.getElementById("btn").disabled = true ;
    document.getElementById("user").disabled = true ;
    document.getElementById("image").innerHTML = `<img src=${data.avatar_url}" />`;
    document.getElementById("username").innerHTML = data.name ;
    document.getElementById("email").innerHTML = data.login ;
    document.getElementById("followersCount").innerHTML = "Followers Counts: " + data.followers;
    document.getElementById("reposCount").innerHTML =  "Total Respos: " +  data.public_repos ;

});

return false;
}

