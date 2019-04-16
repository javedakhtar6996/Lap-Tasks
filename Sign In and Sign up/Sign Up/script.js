const onSignUp = e => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const payload = {
        email,
        password 
    };
    let users = localStorage.getItem("users");
    if(users == null) {
        users = [] ;
    }else {
        users = JSON.parse(users);
    }
    users.push(payload);
    users = JSON.stringify(users);
    localStorage.setItem("users" , users);
    localStorage.setItem("user",JSON.stringify(payload));
    alert("Your account has been created successfully :> :> :>");
    // window.location = "../Dashboard/dashboard.html"
    return false;
}