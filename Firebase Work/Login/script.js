const onLogin = e => {
    let email = document.querySelector("#email").value ;
    let password = document.querySelector("#password").value ;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(solve => {
    
        swal("Good job!", "Login Successfully!", "success")
        .then(sol =>
        window.location = "../Dashboard/index.html"
        );
    })
    .catch(error => {
        swal("Error!", "Email or Password Incorrect!", "warning");
      });
    
}